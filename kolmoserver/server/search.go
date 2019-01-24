package server

import (
	"fmt"
	"net/http"

	"github.com/gomodule/redigo/redis"
)

//search(w http.ResponseWriter, r *http.Request):
//	Searches for the hash in the redis db matching the given query parameter 'cid'
//	and returns the manifest of that cid in the form of json.
func search(w http.ResponseWriter, r *http.Request) {
	var data string
	validSearchParams := map[string]bool{"cid": true}

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
	cid := r.FormValue("cid")
	data, err := redis.String(conn.Do("HGET", cid, "json"))
	if err != nil {
		fmt.Fprint(w, "")
	}
	fmt.Fprint(w, data)
}
