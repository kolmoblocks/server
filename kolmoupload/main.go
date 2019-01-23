package main

import (
	"flag"
	"fmt"

	"github.com/kolmoblocks/server/kolmoserver/server"
)

func main() {
	//Set flag -upload and upload specified file/directory to redis db
	pathPtr := flag.String("upload", "", "Path to file/folder to be uploaded to redis")
	flag.Parse()
	targetURL := "https://kolmo-228620.appspot.com/upload"

	if *pathPtr != "" {
		err := server.SendLocalFiles(targetURL, *pathPtr)
		if err != nil {
			fmt.Println("Unable to upload files specified at " + *pathPtr)
		}
	}

}
