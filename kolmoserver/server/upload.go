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

	"github.com/gomodule/redigo/redis"
)

func generateFormula(rawData []byte) Formula {
	var f Formula
	f.Size = len(rawData)
	h := sha256.New()
	h.Write(rawData)
	f.Cids.SHA256 = hex.EncodeToString(h.Sum(nil))
	f.Mime = http.DetectContentType(rawData)

	return f
}

func insertHash(f Formula, raw []byte, c redis.Conn) error {
	jsonData, err := json.MarshalIndent(&f, "", "\t")
	_, err = c.Do("HMSET", f.Cids.SHA256, "json", string(jsonData), "raw", raw)
	if err != nil {
		return errors.New("Failed to insert" + f.Cids.SHA256)
	}
	fmt.Println(f.Cids.SHA256 + " inserted\n")
	return nil
}

//SendLocalFiles to /upload endpoint
func SendLocalFiles(targetURL string, path string) error {

	fileStat, err := os.Stat(path)
	if err != nil {
		return err
	}

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
	fmt.Println(contentType)
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

func upload(w http.ResponseWriter, r *http.Request) {
	switch method := r.Method; method {
	case "GET":
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
			f := generateFormula(buf.Bytes())
			err = insertHash(f, buf.Bytes(), conn)
			if err != nil {
				fmt.Fprint(w, err)
			}
			fmt.Fprint(w, f.Cids.SHA256+" inserted\n")
			buf.Reset()
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}
