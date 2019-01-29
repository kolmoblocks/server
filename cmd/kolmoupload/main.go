package main

import (
	"flag"
	"fmt"

	"github.com/kolmoblocks/server"
)

func main() {
	//Endpoint in webapp for which we are uploading through
	uploadURL := "https://kolmo-228620.appspot.com/upload"
	uploadJSONURL := "https://kolmo-228620.appspot.com/upload_json"
	rawPathPtr := flag.String("upload", "", "Path to file/folder to be uploaded to redis")
	jsonPathPtr := flag.String("uploadJSON", "", "Path to file/folder to be uploaded to redis")

	flag.Parse()
	if *rawPathPtr != "" {
		err := server.SendLocalFiles(uploadURL, *rawPathPtr)
		if err != nil {
			fmt.Println("Unable to upload files specified at " + *rawPathPtr)
		}
	}
	if *jsonPathPtr != "" {
		err := server.SendLocalFiles(uploadJSONURL, *jsonPathPtr)
		if err != nil {
			fmt.Println("Unable to upload files specified at " + *jsonPathPtr)

		}
	}

}
