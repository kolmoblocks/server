package server

import (
	"net/http"

	"github.com/gorilla/mux"
)

// NewRouter creates a new router
func NewRouter() *mux.Router {

	r := mux.NewRouter()

	r.HandleFunc("/upload/zstd", uploadZstd)

	r.HandleFunc("/upload", upload)

	r.HandleFunc("/search", search).Methods("GET")

	r.HandleFunc("/raw/{ref}", downloadRaw).Methods("GET")

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("kolmojs/build")))

	return r
}
