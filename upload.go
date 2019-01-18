package server

import (
	"bytes"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"text/template"
)

func generateJSON(rawData []byte) Formula {
	var f Formula
	f.TargetSize = len(rawData)
	h := sha256.New()
	h.Write(rawData)
	f.TargetID = base64.URLEncoding.EncodeToString(h.Sum(nil))
	f.Mime = http.DetectContentType(rawData)

	return f
}

func upload(w http.ResponseWriter, r *http.Request) {
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

		f := generateJSON(rawBuf.Bytes())
		jsonData, err := json.MarshalIndent(&f, "", "\t")
		if err != nil {
			return
		}
		_, err = conn.Do("HMSET", f.TargetID, "json", string(jsonData), "raw", rawBuf.Bytes())

		if err != nil {
			fmt.Fprint(w, "Insertion FAIL")
		} else {
			fmt.Fprint(w, "OK")
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}
