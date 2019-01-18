package server

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"strings"
	"text/template"

	"github.com/gomodule/redigo/redis"
	"github.com/gorilla/mux"
)

// type Formula struct {
// 	Mime string `json:"MIME"`
// 	Size int    `json:"size"`
// }

func search(w http.ResponseWriter, r *http.Request) {
	// var f Formula
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

	// for { //every key in redis
	//open connection ->ping

	data, err := redis.String(conn.Do("GET", cid))
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	fmt.Fprint(w, data)

	// json.Unmarshal([]byte(data), &formula)

	// formula = Formula{}

}

func serveRaw(w http.ResponseWriter, r *http.Request) {
	// var f Formula

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

	data, err := redis.Bytes(conn.Do("GET", ref))
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	// json.Unmarshal([]byte(h.JsonData), &f)
	// if f.Mime != "" {
	// 	w.Header().Set("Content-Type", f.Mime)
	// }

	fmt.Fprint(w, data)

}

func upload(w http.ResponseWriter, r *http.Request) {
	switch method := r.Method; method {
	case "GET":
		t, err := template.ParseFiles("upload.gtpl")

		if err != nil {
			http.Error(w, "cannot parse the template file", 500)
			return
		}

		t.Execute(w, nil)

	case "POST":

		file, handler, err := r.FormFile("upload")
		defer file.Close()

		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		buf := bytes.NewBuffer(nil)
		_, err = io.Copy(buf, file)

		conn := redisPool.Get()
		defer conn.Close()

		if err := ping(conn); err != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		r.ParseForm()
		if strings.Join(r.Form["type"], "") == "json" {
			_, err = conn.Do("SET", handler.Filename, buf.String())
		} else if strings.Join(r.Form["type"], "") == "raw" {
			_, err = conn.Do("SET", handler.Filename, buf.Bytes())
		}
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

// NewRouter creates a  new router
func NewRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/upload", upload)
	r.HandleFunc("/search", search).Methods("GET")
	r.HandleFunc("/raw", serveRaw).Methods("GET")
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("build"))) //path to be updated
	return r
}
