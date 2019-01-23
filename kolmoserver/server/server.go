package server

import (
	"net/http"

	"github.com/gorilla/mux"
)

//Formula struct
type Formula struct {
	Mime string `json:"MIME"`
	Cids Hashes `json:"cids"`
	Size int    `json:"size"`
}

//Hashes struct
type Hashes struct {
	SHA256 string `json: "SHA256"`
}

// NewRouter creates a new router
func NewRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/upload", upload)
	r.HandleFunc("/search", search).Methods("GET")
	r.HandleFunc("/raw/{ref}", serveRaw).Methods("GET")
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("build"))) //path to be updated
	return r
}
