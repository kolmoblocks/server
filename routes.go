package server

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

// Formula struct
type Formula struct {
	Actor      map[string]Manifest `json:"actor"`
	Parameters map[string]Manifest `json:"parameters"`
}

// NewFormula creating with params each of them is simple manifest (only doi)
func NewFormula(wasmDoi string, glueDoi string, params map[string]string) *Formula {
	newFormula := new(Formula)

	newFormula.Actor = make(map[string]Manifest)

	newFormula.Actor["wasm"] = Manifest{
		Doi: Hashes{
			SHA256: wasmDoi,
		},
	}

	if 0 != len(glueDoi) {
		newFormula.Actor["jsglue"] = Manifest{
			Doi: Hashes{
				SHA256: glueDoi,
			},
		}
	}

	newFormula.Parameters = make(map[string]Manifest)

	for k, v := range params {
		newFormula.Parameters[k] = Manifest{
			Doi: Hashes{
				SHA256: v,
			},
		}
	}

	return newFormula
}

// Manifest struct
type Manifest struct {
	Mime     string    `json:"MIME,omitempty"`
	Size     int       `json:"size,omitempty"`
	Doi      Hashes    `json:"doi"`
	Formulas []Formula `json:"formulas,omitempty"`
}

// AddFormula for adding formula to manifest
func (m *Manifest) AddFormula(formula *Formula) {
	m.Formulas = append(m.Formulas, *formula)
}

// ToJSON for converting manifest to JSON
func (m Manifest) ToJSON() ([]byte, error) {
	return json.MarshalIndent(&m, "", "\t")
}

// Hashes struct
type Hashes struct {
	SHA256 string `json:"SHA256"`
}

// NewRouter creates a new router
func NewRouter() *mux.Router {

	r := mux.NewRouter()

	r.HandleFunc("/upload/zstd", uploadZstd)

	r.HandleFunc("/upload", upload)

	r.HandleFunc("/upload_json", uploadJSON)

	r.HandleFunc("/search", search).Methods("GET")

	r.HandleFunc("/raw/{ref}", serveRaw).Methods("GET")

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("kolmojs/build")))

	return r
}
