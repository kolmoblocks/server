package server

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gomodule/redigo/redis"
	"github.com/gorilla/mux"
)

//serveRaw(w http.ResponseWriter, r *http.Request):
//	Searches the redis db for the hash matching the provided ref variable.
// 	The json field of the hash is retrieved and deserialized to find out what the MIME type
// 	of the raw data is of. Http reponse header "Content-Type" is then set to the MIME type.
//	The []byte retrieved from the raw field of the hash is then served.

func serveRaw(w http.ResponseWriter, r *http.Request) {
	var m Manifest

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

	json.Unmarshal([]byte(jsonData), &m)

	if m.Mime != "" {
		w.Header().Set("Content-Type", m.Mime)
	}

	fmt.Fprint(w, rawData)

}
