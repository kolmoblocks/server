package main

import (
	"github.com/kolmoblocks/server"
	"fmt"
	"net/http"
	"github.com/gomodule/redigo/redis"
	"os"
	"log"
	"time"
)

var (
	redisPool *redis.Pool
)


func main() {
	redisHost := os.Getenv("REDISHOST")
	if (redisHost=="") {
		redisHost="localhost"
	}
	redisPort := os.Getenv("REDISPORT")
	if (redisPort=="") {
		redisPort="6379"
	}
	redisAddr := fmt.Sprintf("%s:%s", redisHost, redisPort)
	log.Printf("connecting to redis at %s", redisAddr)

	const maxConnections = 10
	
    redisPool =  &redis.Pool{
		MaxIdle: 3,
		IdleTimeout: 240 * time.Second,
		Dial: func () (redis.Conn, error) { return redis.Dial("tcp", redisAddr) },
	  }
	r := server.NewRouter()	
	log.Fatal(http.ListenAndServe(":8080", r))
}