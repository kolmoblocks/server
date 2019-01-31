package server

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

//Manifest struct for marshaling/unmarshaling json manifest
type Manifest struct {
	Mime string `json:"MIME"`
	Cids Hashes `json:"cids"`
	Size int    `json:"size"`
}

func (m Manifest) ToJSON() ([]byte, error) {
	return json.MarshalIndent(&m, "", "\t")
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
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("kolmojs/build")))
	return r
}
