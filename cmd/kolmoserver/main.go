package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gomodule/redigo/redis"
	"github.com/kolmoblocks/server"
)

var (
	redisPool *redis.Pool
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
	r := server.NewRouter()
	log.Fatal(http.ListenAndServe(":8080", r))
}
