package server

import (
	"net/http"

	"github.com/gorilla/mux"
)

//Formula struct
type Formula struct {
	Mime       string `json:"MIME"`
	Tag        string `json:"tag"`
	TargetID   string `json:"target_id"`
	TargetSize int    `json:"target_size"`
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
