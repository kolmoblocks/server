package server

import (
	"fmt"
	"net/http"

	"github.com/gomodule/redigo/redis"
)

//search(w http.ResponseWriter, r *http.Request):
//	Searches for the hash in the redis db matching the given query parameter 'doi'
//	and returns the manifest of that doi in the form of json.
func search(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	validSearchParams := map[string]bool{"doi": true}

	r.ParseForm()

	//Error checking for valid parameters
	for searchParam := range r.Form {
		if _, valid := validSearchParams[searchParam]; !valid {
			fmt.Fprint(w, "Invalid search parameter:"+searchParam)
			return
		}
	}

	if redisPool == nil {
		http.Error(w, "redis connection is nil", 500)
		return
	}

	conn := redisPool.Get()
	defer conn.Close()
	if err := ping(conn); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	//Sets content type in http header and retrieves json field of hash in redis db
	w.Header().Set("Content-Type", "application/json")
	doi := r.FormValue("doi")
	data, err := redis.Bytes(conn.Do("HGET", doi, "json"))
	if err != nil {
		http.Error(w, "data object not found", 404)
		return
	}
	w.Write(data)
}
