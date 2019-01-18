package server

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"text/template"

	"github.com/gomodule/redigo/redis"
	"github.com/gorilla/mux"
)

//Formula struct
type Formula struct {
	Mime string `json:"MIME"`
}

func search(w http.ResponseWriter, r *http.Request) {
	var data string
	validSearchParams := map[string]bool{"cid": true}

	r.ParseForm()

	for searchParam := range r.Form {
		if _, valid := validSearchParams[searchParam]; !valid {
			fmt.Fprint(w, "Invalid search parameter:"+searchParam)
			return
		}
	}

	cid := r.FormValue("cid")

	if redisPool == nil {
		http.Error(w, "redis connection is nil", 500)
		return
	}

	conn := redisPool.Get()
	defer conn.Close()

	if err := ping(conn); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	data, err := redis.String(conn.Do("HGET", cid, "json"))
	if err != nil {
		fmt.Fprint(w, "")
	}

	fmt.Fprint(w, data)
}

func serveRaw(w http.ResponseWriter, r *http.Request) {
	var f Formula

	validSearchParams := map[string]bool{"ref": true}

	r.ParseForm()

	for searchParam := range r.Form {
		if _, valid := validSearchParams[searchParam]; !valid {
			fmt.Fprint(w, "Invalid search parameter:"+searchParam)
			return
		}
	}
	ref := r.FormValue("ref")

	conn := redisPool.Get()
	defer conn.Close()
	if err := ping(conn); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	rawData, err := redis.Bytes(conn.Do("HGET", ref, "raw"))
	jsonData, err := redis.Bytes(conn.Do("HGET", ref, "json"))
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	json.Unmarshal([]byte(jsonData), &f)

	if f.Mime != "" {
		w.Header().Set("Content-Type", f.Mime)
	}

	fmt.Fprint(w, rawData)

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

		jsonFile, _, err := r.FormFile("uploadJson")
		rawFile, handler, err2 := r.FormFile("uploadRaw")
		defer jsonFile.Close()
		defer rawFile.Close()

		if err != nil || err2 != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		jsonBuf := bytes.NewBuffer(nil)
		rawBuf := bytes.NewBuffer(nil)
		_, err = io.Copy(jsonBuf, jsonFile)
		_, err2 = io.Copy(rawBuf, rawFile)

		if err != nil || err2 != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		conn := redisPool.Get()
		defer conn.Close()

		if err := ping(conn); err != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		_, err = conn.Do("HMSET", handler.Filename, "json", jsonBuf.String(), "raw", rawBuf)

		if err != nil {
			fmt.Fprint(w, "Insertion FAIL")
		} else {
			fmt.Fprint(w, "OK")
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}

func ping(conn redis.Conn) error {
	_, err := redis.String(conn.Do("PING"))
	if err != nil {
		return err
	}
	return nil
}

// NewRouter creates a new router
func NewRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/upload", upload)
	r.HandleFunc("/search", search).Methods("GET")
	r.HandleFunc("/raw", serveRaw).Methods("GET")
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("build"))) //path to be updated
	return r
}
