package server

import (
	"github.com/gorilla/mux"
)

//Manifest struct for marshaling/unmarshaling json manifest
type Manifest struct {
	Mime string `json:"MIME"`
	Cids Hashes `json:"cids"`
	Size int    `json:"size"`
}

//Hashes struct for marshaling/unmarshaling json manifest
type Hashes struct {
	SHA256 string `json: "SHA256"`
}

// NewRouter creates a new router
func NewRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/upload", upload)
	r.HandleFunc("/upload_json", uploadJSON)
	r.HandleFunc("/search", search).Methods("GET")
	r.HandleFunc("/raw/{ref}", serveRaw).Methods("GET")
	r.HandleFunc("/", home) //path to be updated
	// r.PathPrefix("/").Handler(http.FileServer(http.Dir("public")))

	return r
}
