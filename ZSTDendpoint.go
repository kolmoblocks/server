package server

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"text/template"
	"time"

	"github.com/valyala/gozstd"
)

const compressionLevel = 19

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

		var totalOut = ""

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
			compressedData := gozstd.CompressLevel(nil, buf.Bytes(), compressionLevel)
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

			totalOut = totalOut + fmt.Sprintf("%s (%s) : %v -> %v\n", fh.Filename, dataManifest.Doi.SHA256, len(buf.Bytes()), len(compressedData))
			w.Write([]byte(fmt.Sprintf("%s\n", string(m))))
		}

		w.Write([]byte("\nZSTD compression stats:\n(filename (DOI) : original size -> ZSTD compression size)\n\n"))
		w.Write([]byte(totalOut))

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}

func updateZstdDictionary(w http.ResponseWriter, r *http.Request) {

	switch method := r.Method; method {

	case "GET":

		wasmDoi, glueDoi, err := GetWasmInfo("wasm:unzstd")
		if err != nil {
			http.Error(w, fmt.Sprintf("error geting information for wasm %s", err.Error()), 500)
			return
		}

		manifests, err := GetManifestsWithActorDoi(wasmDoi)
		if err != nil {
			http.Error(w, fmt.Sprintf("error geting manifests for wasm %s", err.Error()), 500)
			return
		}

		// collect all decompressed data for generating dictionary
		var allDecompressedData [][]byte

		var allCompressedData map[string][]byte
		allCompressedData = make(map[string][]byte)

		var allManifests map[string]Manifest
		allManifests = make(map[string]Manifest)

		var allCDsize map[string]int
		allCDsize = make(map[string]int)

		w.Write([]byte("ZSTD compression stats:\n(DOI : original size -> ZSTD compression size)\n\n"))
		for _, manifest := range manifests {

			for _, formula := range manifest.Formulas {

				cd, CDpresent := formula.Parameters["CompressedData"]
				_, Dpresent := formula.Parameters["Dictionary"]

				// getting formulas for decompress data
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

						allCompressedData[manifest.Doi.SHA256] = decData
						allManifests[manifest.Doi.SHA256] = manifest
						allCDsize[manifest.Doi.SHA256] = len(rawData)

						cr := (float32(len(decData))/float32(len(rawData)) - 1) * 100

						w.Write([]byte(fmt.Sprintf("%s : %v -> %v (%f)\n", manifest.Doi.SHA256, len(decData), len(rawData), cr)))

					}
				}

				break
			}

		}

		if len(allDecompressedData) <= 1 {
			http.Error(w, fmt.Sprintf("dictionary will not generated (no data)"), 500)
			return
		}

		// generate dictionary and insert it to storage
		dictionary := gozstd.BuildDict(allDecompressedData, 100*1024)

		dictionaryManifest := CreateManifestForRawData(dictionary)
		err = InsertDataWithManifest(dictionary, dictionaryManifest, "Dictionary for SZTD ("+time.Now().Format(time.RFC822)+")")
		if err != nil {
			http.Error(w, fmt.Sprintf("failed to insert dictionary data and manifest to storage %s", err.Error()), 500)
			return
		}
		w.Write([]byte(fmt.Sprintf("\nNew dictionary generated (%s): size %v\n\n", dictionaryManifest.Doi.SHA256, len(dictionary))))

		// compress data with dictionary and add new formula to manifests
		dictForCompression, err := gozstd.NewCDictLevel(dictionary, compressionLevel)
		if err != nil {
			http.Error(w, fmt.Sprintf("cannot create CDict: %s", err.Error()), 500)
			return
		}
		defer dictForCompression.Release()

		w.Write([]byte("ZSTD compression with dictionary stats:\n(DOI : ZSTD compression size -> ZSTD + dictionary compression size)\n\n"))

		for doi, rawData := range allCompressedData {

			compressedDataWithDictionary := gozstd.CompressDict(nil, rawData, dictForCompression)

			manifest, _ := allManifests[doi]
			size, _ := allCDsize[doi]

			cr := (float32(size)/float32(len(compressedDataWithDictionary)) - 1) * 100

			if len(compressedDataWithDictionary) <= size {

				compressedDataManifest := CreateManifestForRawData(compressedDataWithDictionary)
				err = InsertDataWithManifest(compressedDataWithDictionary, compressedDataManifest, "Data compressed with dictionary")
				if err != nil {
					http.Error(w, fmt.Sprintf("failed to insert compressed data and manifest to storage %s", err.Error()), 500)
					return
				}

				formula := NewFormula(wasmDoi, glueDoi, map[string]string{"CompressedData": compressedDataManifest.Doi.SHA256, "Dictionary": dictionaryManifest.Doi.SHA256})

				_, err := AddFormulaToManifest(manifest, formula, "")
				if err != nil {
					http.Error(w, fmt.Sprintf("failed to add formula to manifest %s", err.Error()), 500)
					return
				}

				w.Write([]byte(fmt.Sprintf("%s : %v -> %v (%f)\n", doi, size, len(compressedDataWithDictionary), cr)))

			} else {
				w.Write([]byte(fmt.Sprintf("%s : %v -> %v\n", doi, size, len(compressedDataWithDictionary))))
			}
		}

	case "POST":

		w.Write([]byte("post"))

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}

type dictStat struct {
	allSize    int
	ZSTDSize   int
	filesCount int
}

func statZstd(w http.ResponseWriter, r *http.Request) {

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

		var allDictionaries map[string]dictStat
		allDictionaries = make(map[string]dictStat)

		var allSize = 0
		var allZSTDSize = 0
		var filesCount = 0

		for _, manifest := range manifests {

			allSize = allSize + manifest.Size
			filesCount = filesCount + 1

			for _, formula := range manifest.Formulas {

				cd, CDpresent := formula.Parameters["CompressedData"]

				d, Dpresent := formula.Parameters["Dictionary"]

				if CDpresent && Dpresent {

					stat := allDictionaries[d.Doi.SHA256]

					cdm, err := GetManifestByDoi(cd.Doi.SHA256)
					if err != nil {
						http.Error(w, fmt.Sprintf("error geting manifests for compressed data %s", err.Error()), 500)
						return
					}

					stat.ZSTDSize = stat.ZSTDSize + cdm.Size
					stat.allSize = stat.allSize + manifest.Size
					stat.filesCount = stat.filesCount + 1

					allDictionaries[d.Doi.SHA256] = stat
				}

				if CDpresent && !Dpresent {

					cdm, err := GetManifestByDoi(cd.Doi.SHA256)
					if err != nil {
						http.Error(w, fmt.Sprintf("error geting manifests for compressed data %s", err.Error()), 500)
						return
					}

					allZSTDSize = allZSTDSize + cdm.Size
				}
			}
		}

		// ZSTD stat
		w.Write([]byte(fmt.Sprintf("ZSTD stat for %v files:\n", filesCount)))
		w.Write([]byte(fmt.Sprintf("Raw size, bytes -  %v\n", allSize)))
		w.Write([]byte(fmt.Sprintf("Compressed size, bytes - %v\n", allZSTDSize)))
		w.Write([]byte(fmt.Sprintf("Disk savings, bytes - %v\n", allSize-allZSTDSize)))
		w.Write([]byte(fmt.Sprintf("Traffic savings, bytes - %v\n\n", allSize-allZSTDSize)))

		// dictionary stat
		for dictionaryDoi, dictStat := range allDictionaries {

			cdm, err := GetManifestByDoi(dictionaryDoi)
			if err != nil {
				http.Error(w, fmt.Sprintf("error geting manifests for compressed data %s", err.Error()), 500)
				return
			}

			descr, err := GetDescriptionByDoi(dictionaryDoi)
			if err != nil {
				http.Error(w, fmt.Sprintf("error geting description %s", err.Error()), 500)
				return
			}

			w.Write([]byte(fmt.Sprintf("ZSTD+dictionary stat for %v files (%s, %v)\n", dictStat.filesCount, descr, cdm.Size)))
			w.Write([]byte(fmt.Sprintf("Raw size, bytes -  %v\n", dictStat.allSize)))
			w.Write([]byte(fmt.Sprintf("Compressed size, bytes - %v\n", dictStat.ZSTDSize)))
			w.Write([]byte(fmt.Sprintf("Disk savings, bytes - %v\n", dictStat.allSize-dictStat.ZSTDSize)))
			w.Write([]byte(fmt.Sprintf("Traffic savings, bytes - %v\n\n", dictStat.allSize-dictStat.ZSTDSize-cdm.Size)))
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
}
