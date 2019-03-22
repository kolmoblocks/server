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
	"strings"
	"text/template"

	"github.com/gomodule/redigo/redis"
	"github.com/valyala/gozstd"
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
	m.Doi.SHA256 = strings.ToUpper(hex.EncodeToString(h.Sum(nil)))
	m.Mime = http.DetectContentType(rawData)
	return m
}

//insertHash(m Manifest, raw []byte, c redis.Conn) error
//  Inserts a hash into redis with fields json: Manifest, raw: []byte
func insertHash(m Manifest, raw []byte, c redis.Conn, description string) error {
	//Create json string by marshaling Manifest
	jsonData, err := m.ToJSON()
	if err != nil {
		return err
	}

	_, err = c.Do("HMSET", m.Doi.SHA256, "manifest", string(jsonData), "raw", raw, "description", description)
	if err != nil {
		return errors.New("Failed to insert" + m.Doi.SHA256)
	}

	return nil
}

func insertJSON(j []byte, c redis.Conn) (string, error) {
	//Create json string by marshaling Manifest
	var m Manifest
	json.Unmarshal(j, &m)
	_, err := c.Do("HSET", m.Doi.SHA256, "json", string(j))
	if err != nil {
		return "", errors.New("Failed to insert" + m.Doi.SHA256)
	}
	fmt.Println(m.Doi.SHA256 + " inserted\n")
	return m.Doi.SHA256, nil
}

//func validJSON(in []byte)
//	Checks that a []byte is a json and if its fields are valid
func validJSON(in []byte) error {
	var m map[string]interface{}
	if err := json.Unmarshal(in, &m); err != nil {
		return errors.New("Input is not JSON")
	}
	if m["doi"] == nil {
		return errors.New("JSON does not include doi data")
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
		for _, fh := range fhs {
			buf := bytes.NewBuffer(nil)
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
			err = insertHash(m, buf.Bytes(), conn, fh.Filename)
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

func uploadZstd(w http.ResponseWriter, r *http.Request) {

	switch method := r.Method; method {
	case "GET":

		//GUI interface for uploading file
		t, err := template.ParseFiles("./templates/uploadZstd.gtpl")
		if err != nil {
			http.Error(w, "Cannot parse template", 500)
			return
		}
		t.Execute(w, nil)

	case "POST":

		wasmDoi, glueDoi, err := GetWasmInfo("wasm:unzstd")
		if err != nil {
			http.Error(w, fmt.Sprintf("error geting information for wasm %s", err.Error()), 500)
			return
		}

		r.ParseMultipartForm(32 << 20) // 32MB is the default used by FormFile
		fhs := r.MultipartForm.File["files"]
		for _, fh := range fhs {

			buf := bytes.NewBuffer(nil)

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

			// 1. compress data by ZSTD and insert it to storage with manifest
			compressedData := gozstd.Compress(nil, buf.Bytes())
			compressedDataManifest := generateManifest(compressedData)
			err = InsertDataWithManifest(compressedData, compressedDataManifest, fmt.Sprintf("%s compressed by ZSTD", fh.Filename))
			if err != nil {
				http.Error(w, fmt.Sprintf("failed to insert compressed data and manifest to storage %s", err.Error()), 500)
				return
			}

			// 2. make formula to decompress data
			formula := NewFormula(wasmDoi, glueDoi, map[string]string{"CompressedData": compressedDataManifest.Doi.SHA256})

			// 3. add formula to manifest
			dataManifest := generateManifest(buf.Bytes())
			newManifest, err := AddFormulaToManifest(dataManifest, formula, fh.Filename)
			if err != nil {
				http.Error(w, fmt.Sprintf("failed to add formula to manifest %s", err.Error()), 500)
				return
			}

			m, _ := newManifest.ToJSON()

			w.Write([]byte(fmt.Sprintln(fh.Filename)))
			w.Write([]byte(fmt.Sprintln(r.Header.Get("Origin") + "/search?doi=" + newManifest.Doi.SHA256)))
			w.Write([]byte(fmt.Sprintln(string(m))))
			w.Write([]byte(fmt.Sprintln()))
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}
