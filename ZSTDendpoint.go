package server

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"text/template"

	"github.com/valyala/gozstd"
)

func uploadZstd(w http.ResponseWriter, r *http.Request) {

	switch method := r.Method; method {
	case "GET":

		//GUI interface for uploading file
		t, err := template.ParseFiles("./templates/uploadZstd.gtpl")
		if err != nil {
			http.Error(w, "Cannot parse template", 500)
			return
		}
		t.Execute(w, nil)

	case "POST":

		wasmDoi, glueDoi, err := GetWasmInfo("wasm:unzstd")
		if err != nil {
			http.Error(w, fmt.Sprintf("error geting information for wasm %s", err.Error()), 500)
			return
		}

		r.ParseMultipartForm(32 << 20) // 32MB is the default used by FormFile
		fhs := r.MultipartForm.File["files"]
		for _, fh := range fhs {

			buf := bytes.NewBuffer(nil)

			file, err := fh.Open()
			if err != nil {
				http.Error(w, "Failed to read file", 500)
				return
			}
			_, err = io.Copy(buf, file)
			if err != nil {
				http.Error(w, "error writing to buffer", 500)
				return
			}

			// 1. compress data by ZSTD and insert it to storage with manifest
			compressedData := gozstd.Compress(nil, buf.Bytes())
			compressedDataManifest := CreateManifestForRawData(compressedData)
			err = InsertDataWithManifest(compressedData, compressedDataManifest, fmt.Sprintf("%s compressed by ZSTD", fh.Filename))
			if err != nil {
				http.Error(w, fmt.Sprintf("failed to insert compressed data and manifest to storage %s", err.Error()), 500)
				return
			}

			// 2. make formula to decompress data
			formula := NewFormula(wasmDoi, glueDoi, map[string]string{"CompressedData": compressedDataManifest.Doi.SHA256})

			// 3. add formula to manifest
			dataManifest := CreateManifestForRawData(buf.Bytes())
			newManifest, err := AddFormulaToManifest(dataManifest, formula, fh.Filename)
			if err != nil {
				http.Error(w, fmt.Sprintf("failed to add formula to manifest %s", err.Error()), 500)
				return
			}

			m, _ := newManifest.ToJSON()

			w.Write([]byte(fmt.Sprintln(fh.Filename)))
			w.Write([]byte(fmt.Sprintln(r.Header.Get("Origin") + "/search?doi=" + newManifest.Doi.SHA256)))
			w.Write([]byte(fmt.Sprintln(string(m))))
			w.Write([]byte(fmt.Sprintln()))
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}

func updateZstdDictionary(w http.ResponseWriter, r *http.Request) {

	switch method := r.Method; method {

	case "GET":

		wasmDoi, _, err := GetWasmInfo("wasm:unzstd")
		if err != nil {
			http.Error(w, fmt.Sprintf("error geting information for wasm %s", err.Error()), 500)
			return
		}

		manifests, err := GetManifestsWithActorDoi(wasmDoi)
		if err != nil {
			http.Error(w, fmt.Sprintf("error geting manifests for wasm %s", err.Error()), 500)
			return
		}

		var allDecompressedData [][]byte

		for _, manifest := range manifests {

			for _, formula := range manifest.Formulas {

				cd, CDpresent := formula.Parameters["CompressedData"]
				_, Dpresent := formula.Parameters["Dictionary"]

				if CDpresent && !Dpresent {

					rawData, err := GetDataByDoi(cd.Doi.SHA256)
					if err != nil {
						http.Error(w, fmt.Sprintf("error (%s) getting raw data for %s", err.Error(), manifest.Doi.SHA256), 500)
						return
					}

					if 0 != len(rawData) {

						decData, err := gozstd.Decompress(nil, rawData)
						if err != nil {
							http.Error(w, fmt.Sprintf("error (%s) decompressing data for %s", err.Error(), cd.Doi.SHA256), 500)
							return
						}

						allDecompressedData = append(allDecompressedData, decData)

						w.Write([]byte(fmt.Sprintf("%s : %v -> %v\n", cd.Doi.SHA256, len(rawData), len(decData))))

					}
				}
			}

		}

	case "POST":

		w.Write([]byte("post"))

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}
