package server

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
	"text/template"

	"github.com/gomodule/redigo/redis"
)

//generateManifest(rawData []byte) Manifest:
//	Generates manifest for given []byte and stores in a Manifest struct
//	Mime type is detected using http.DetectContentType which guesses the type based on the
//  first 500 bytes of the provided by rawData.
//  SHA256 hash is generated for rawData and stored in hex.
func generateManifest(rawData []byte) Manifest {
	var m Manifest
	m.Size = len(rawData)
	h := sha256.New()
	h.Write(rawData)
	m.Cids.SHA256 = hex.EncodeToString(h.Sum(nil))
	m.Mime = http.DetectContentType(rawData)
	return m
}

//insertHash(m Manifest, raw []byte, c redis.Conn) error
//  Inserts a hash into redis with fields json: Manifest, raw: []byte
func insertHash(m Manifest, raw []byte, c redis.Conn) error {
	//Create json string by marshaling Manifest
	jsonData, err := m.ToJSON()
	if err != nil {
		return err
	}

	_, err = c.Do("HMSET", m.Cids.SHA256, "json", string(jsonData), "raw", raw)
	if err != nil {
		return errors.New("Failed to insert" + m.Cids.SHA256)
	}

	return nil
}

func insertJSON(j []byte, c redis.Conn) (string, error) {
	//Create json string by marshaling Manifest
	var m Manifest
	json.Unmarshal(j, &m)
	_, err := c.Do("HSET", m.Cids.SHA256, "json", string(j))
	if err != nil {
		return "", errors.New("Failed to insert" + m.Cids.SHA256)
	}
	fmt.Println(m.Cids.SHA256 + " inserted\n")
	return m.Cids.SHA256, nil
}

//func validJSON(in []byte)
//	Checks that a []byte is a json and if its fields are valid
func validJSON(in []byte) error {
	var m map[string]interface{}
	if err := json.Unmarshal(in, &m); err != nil {
		return errors.New("Input is not JSON")
	}
	if m["cids"] == nil {
		return errors.New("JSON does not include cids field")
	}
	return nil
}

//SendLocalFiles (targetURL string, path string) error:
//	Sends all file(s) to /upload endpoint through a single POST request.
// 	All files are wrapped in a formfile which are contained in a multipart form.
func SendLocalFiles(targetURL string, path string) error {
	//Check that path is valid
	fileStat, err := os.Stat(path)
	if err != nil {
		return err
	}

	//Create multipart form and then write all files specified in the path to it
	bodyBuf := &bytes.Buffer{}
	bodyWriter := multipart.NewWriter(bodyBuf)
	switch {
	case fileStat.IsDir():
		files, err := ioutil.ReadDir(path)
		if err != nil {
			return errors.New("Unable to read " + path)
		}
		for _, fi := range files {
			filePath := path + fi.Name()

			fh, err := os.Open(filePath)
			if err != nil {
				return errors.New("Error opening file at: " + filePath)
			}

			fileWriter, err := bodyWriter.CreateFormFile("files", filePath)
			if err != nil {
				return errors.New("Error writing to buffer " + filePath)
			}

			_, err = io.Copy(fileWriter, fh)
			if err != nil {
				return err
			}
		}
	default:
		fileWriter, err := bodyWriter.CreateFormFile("files", path)
		if err != nil {
			return errors.New("Error writing to buffer " + path)
		}
		fh, err := os.Open(path)
		if err != nil {
			return errors.New("Error opening file at: " + path)
		}
		_, err = io.Copy(fileWriter, fh)
		if err != nil {
			return err
		}
	}
	contentType := bodyWriter.FormDataContentType()
	bodyWriter.Close()
	resp, err := http.Post(targetURL, contentType, bodyBuf)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return err
	}
	fmt.Println(resp.Status)
	fmt.Println(string(respBody))
	return nil
}

//func upload(w http.ResponseWriter, r *http.Request)
//	Uploads all files in the multipartform provided in a POST request
func upload(w http.ResponseWriter, r *http.Request) {
	switch method := r.Method; method {
	case "GET":
		//GUI interface for optionally uploading files through the browser
		t, err := template.ParseFiles("./templates/upload.gtpl")
		if err != nil {
			http.Error(w, "Cannot parse template", 500)
			return
		}
		t.Execute(w, nil)

	case "POST":

		r.ParseMultipartForm(32 << 20) // 32MB is the default used by FormFile
		fhs := r.MultipartForm.File["files"]
		buf := bytes.NewBuffer(nil)
		for _, fh := range fhs {
			file, err := fh.Open()
			if err != nil {
				http.Error(w, "Failed to read file", 500)
				return
			}
			_, err = io.Copy(buf, file)
			if err != nil {
				http.Error(w, "error writing to buffer", 500)
				return
			}
			conn := redisPool.Get()
			defer conn.Close()
			if err := ping(conn); err != nil {
				http.Error(w, "Can't connect to redis", 500)
				return
			}
			//Generates manifest of the uploaded file and inserts it into redis db
			m := generateManifest(buf.Bytes())
			err = insertHash(m, buf.Bytes(), conn)
			if err != nil {
				http.Error(w, "failed to set key in redis", 500)
				return
			}

			serialized, _ := m.ToJSON()
			w.Write(serialized)
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}

//func uploadJSON(w http.ResponseWriter, r *http.Request)
//	Uploads all files in the multipartform provided in a POST request
func uploadJSON(w http.ResponseWriter, r *http.Request) {
	switch method := r.Method; method {
	case "GET":
		//GUI interface for optionally uploading files through the browser
		t, err := template.ParseFiles("./templates/uploadJSON.gtpl")
		if err != nil {
			http.Error(w, "Cannot parse template", 500)
			return
		}
		t.Execute(w, nil)

	case "POST":

		r.ParseMultipartForm(32 << 20) // 32MB is the default used by FormFile
		fhs := r.MultipartForm.File["files"]
		buf := bytes.NewBuffer(nil)
		for _, fh := range fhs {
			file, err := fh.Open()
			if err != nil {
				http.Error(w, "Failed to read file", 500)
				return
			}
			_, err = io.Copy(buf, file)
			if err != nil {
				http.Error(w, "error writing to buffer", 500)
				return
			}
			conn := redisPool.Get()
			defer conn.Close()
			if err := ping(conn); err != nil {
				http.Error(w, "Can't connect to redis", 500)
				return
			}
			//Generates manifest of the uploaded file and inserts it into redis db
			if err := validJSON(buf.Bytes()); err != nil {
				http.Error(w, err.Error(), 500)
				return
			}
			hash, err := insertJSON(buf.Bytes(), conn)
			if err != nil {
				http.Error(w, err.Error(), 500)

			}
			fmt.Fprint(w, hash+" inserted\n")
			buf.Reset()
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}
