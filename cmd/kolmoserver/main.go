package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/kolmoblocks/server"
)

func main() {

	redisHost := os.Getenv("REDISHOST")
	if redisHost == "" {
		redisHost = "localhost"
	}
	redisPort := os.Getenv("REDISPORT")
	if redisPort == "" {
		redisPort = "6379"
	}
	redisAddr := fmt.Sprintf("%s:%s", redisHost, redisPort)
	log.Printf("connecting to redis at %s", redisAddr)
	server.InitRedis(redisAddr)

	pathPtr := flag.String("upload", "", "Path to file/folder to be uploaded to redis")
	flag.Parse()

	if *pathPtr != "" {
		err := server.UploadFiles(*pathPtr)
		if err != nil {
			fmt.Println("Unable to upload files specified at " + *pathPtr)
		}
	}

	r := server.NewRouter()
	log.Fatal(http.ListenAndServe(":8080", r))

}
