package server

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
	"text/template"
)

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
			manifest := CreateManifestForRawData(buf.Bytes())
			err = InsertDataWithManifest(buf.Bytes(), manifest, fh.Filename)
			if err != nil {
				http.Error(w, "failed to set key in redis", 500)
				return
			}

			serialized, _ := manifest.ToJSON()
			w.Write(serialized)
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}
