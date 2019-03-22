package server

import (
	"encoding/json"
	"net/http"

	"github.com/gomodule/redigo/redis"
	"github.com/gorilla/mux"
)

// downloadRaw
func downloadRaw(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	var m Manifest

	conn := redisPool.Get()
	defer conn.Close()
	if err := ping(conn); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	vars := mux.Vars(r)
	rawData, err := redis.Bytes(conn.Do("HGET", vars["ref"], "raw"))
	jsonData, err := redis.Bytes(conn.Do("HGET", vars["ref"], "manifest"))

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	json.Unmarshal([]byte(jsonData), &m)

	if m.Mime != "" {
		w.Header().Set("Content-Type", m.Mime)
	}

	w.Write(rawData)

}
