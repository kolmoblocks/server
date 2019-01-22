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
	"net/http"
	"os"
	"text/template"

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
	fmt.Println(f.Cids.SHA256 + " inserted")
	return nil
}

//UploadFiles will upload all files to redis given the path
func UploadFiles(path string) error {
	var rawFilePath string
	conn := redisPool.Get()
	defer conn.Close()
	if err := ping(conn); err != nil {
		return errors.New("Connection to redis failed")
	}
	fileStat, err := os.Stat(path)

	switch {
	case err != nil:
		return err
	case fileStat.IsDir():
		files, err := ioutil.ReadDir(path)
		if err != nil {
			return errors.New("Unable to read " + path)
		}

		for _, fi := range files {
			rawFilePath = path + fi.Name()
			rawBytes, err := ioutil.ReadFile(rawFilePath)
			if err != nil {
				return err
			}

			f := generateFormula(rawBytes)
			err = insertHash(f, rawBytes, conn)
			if err != nil {
				return err
			}
		}
	default:
		rawBytes, err := ioutil.ReadFile(path)
		if err != nil {
			return err
		}
		f := generateFormula(rawBytes)
		err = insertHash(f, rawBytes, conn)
		if err != nil {
			return err
		}
	}
	return nil
}

func uploadThroughBrowser(w http.ResponseWriter, r *http.Request) {
	switch method := r.Method; method {
	case "GET":
		t, err := template.ParseFiles("upload.gtpl")
		if err != nil {
			http.Error(w, "Cannot parse template", 500)
			return
		}
		t.Execute(w, nil)

	case "POST":

		rawFile, _, err := r.FormFile("uploadRaw")
		defer rawFile.Close()

		if err != nil {
			http.Error(w, "Failed to read raw file", 500)
			return
		}

		rawBuf := bytes.NewBuffer(nil)
		_, err = io.Copy(rawBuf, rawFile)

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

		f := generateFormula(rawBuf.Bytes())
		err = insertHash(f, rawBuf.Bytes(), conn)

		if err != nil {
			fmt.Fprint(w, err)
		}
		fmt.Fprint(w, f.Cids.SHA256+" inserted")

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}
