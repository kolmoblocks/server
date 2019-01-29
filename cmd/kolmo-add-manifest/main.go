package main

import (
	"fmt"
	"os"

	"github.com/kolmoblocks/server"
)

func main() {
	//Endpoint in webapp for which we are uploading through
	serviceURL := os.Getenv("KOLMOLD_GATEWAY")
	if serviceURL == "" {
		serviceURL = "https://kolmold.org"
	}

	uploadJSONURL := serviceURL + "/upload_json"

	if len(os.Args) != 2 {
		fmt.Printf("pass the path to file as an argument, e.g. kolmo-add-manifest manifest.json")
	}

	targetFile := os.Args[1]
	err := server.SendLocalFiles(uploadJSONURL, targetFile)
	if err != nil {
		fmt.Printf("Error: %s\npath:%s\n ", err, targetFile)
	}
}
