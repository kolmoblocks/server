package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"

	"github.com/kolmoblocks/server/kolmoserver/server"
)

func init() {
	t, err := template.ParseFiles("upload.gtpl")
	if err != nil {
		http.Error(w, "Cannot parse template", 500)
		return
	}
}

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

	r := server.NewRouter()
	log.Fatal(http.ListenAndServe(":8080", r))

}
