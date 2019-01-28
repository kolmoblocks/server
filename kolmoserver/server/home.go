package server

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"text/template"
)

func home(w http.ResponseWriter, r *http.Request) {
	var allFiles []string

	allFiles = append(allFiles, "public/index.html")
	files, err := ioutil.ReadDir("htmled")
	if err != nil {
		fmt.Println(err)
	}
	for _, file := range files {
		filename := file.Name()
		if strings.HasSuffix(filename, ".html") {
			allFiles = append(allFiles, "htmled/"+filename)
		}
	}

	tmpl, err := template.ParseFiles(allFiles...)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	tmpl.Execute(w, nil)

	// http.FileServer(http.Dir("public"))
}
