package server

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gomodule/redigo/redis"
	"github.com/gorilla/mux"
)

func serveRaw(w http.ResponseWriter, r *http.Request) {
	var f Formula

	conn := redisPool.Get()
	defer conn.Close()
	if err := ping(conn); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	vars := mux.Vars(r)
	rawData, err := redis.Bytes(conn.Do("HGET", vars["ref"], "raw"))
	jsonData, err := redis.Bytes(conn.Do("HGET", vars["ref"], "json"))

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	json.Unmarshal([]byte(jsonData), &f)

	if f.Mime != "" {
		w.Header().Set("Content-Type", f.Mime)
	}

	fmt.Fprint(w, rawData)

}
