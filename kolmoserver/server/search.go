package server

import (
	"fmt"
	"net/http"

	"github.com/gomodule/redigo/redis"
)

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

	cid := r.FormValue("cid")

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
	w.Header().Set("Content-Type", "application/json")
	data, err := redis.String(conn.Do("HGET", cid, "json"))
	if err != nil {
		fmt.Fprint(w, "")
	}

	fmt.Fprint(w, data)
}
