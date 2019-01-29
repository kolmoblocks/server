package main

import (
	"flag"
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

	uploadURL := serviceURL + "/upload"
	uploadJSONURL := serviceURL + "/upload_json"

	rawPathPtr := flag.String("upload", "", "Path to file/folder to be uploaded to redis")
	jsonPathPtr := flag.String("uploadJSON", "", "Path to file/folder to be uploaded to redis")

	flag.Parse()
	if *rawPathPtr != "" {
		err := server.SendLocalFiles(uploadURL, *rawPathPtr)
		if err != nil {
			fmt.Printf("Error: %s\npath:%s\n ", err, *rawPathPtr)
		}
	}
	if *jsonPathPtr != "" {
		err := server.SendLocalFiles(uploadJSONURL, *jsonPathPtr)
		if err != nil {
			fmt.Println("Unable to upload files specified at " + *jsonPathPtr)

		}
	}

}
