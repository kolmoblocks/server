package server

import (
    "fmt"
	"net/http"
	"github.com/gorilla/mux"
	"encoding/json"
	"github.com/gomodule/redigo/redis"
	"text/template"
	"io"
	"bytes"
)


var (
	redisPool *redis.Pool
)


type Formula struct {
	Mime 	 	string 	`json:"MIME"`
	TargetId 	string 	`json:"target_id"`
	TargetSize 	int 	`json:"target_size"`
	TargetTag 	string 	`json:"target_tag"`
	TokenSize 	int 	`json:"token_size"`
}


type Hash struct{
	JsonData 	string
	RawData		[]byte 		 
}


// func displayJson(w http.ResponseWriter, r *http.Request) {
// 	var filePath string
// 	var rec Recipe
// 	var data []byte
// 	validSearchParams := map[string]bool{"cid": true, "target_size"	: true,
// 	"target_id": true, "token_size": true,"target_tag": true}

// 	r.ParseForm()

// 	for  searchParam, _ := range r.Form {
// 		if _, valid := validSearchParams[searchParam]; !valid {
// 			fmt.Fprint(w, "Invalid search parameter:" + searchParam)
// 			return
// 		}
// 	} 

// 	cid := r.FormValue("cid")
// 	target_size := r.FormValue("target_size")
// 	target_tag := r.FormValue("target_tag")
// 	target_id := r.FormValue("target_id")
// 	token_size := r.FormValue("token_size")
// 	publicPath := "out/public/" //path to be updated 
// 	files, err := ioutil.ReadDir(publicPath)
// 	check(err)
	
// 	for _, f := range files {
// 		filePath = publicPath + f.Name() 
// 		data, err = ioutil.ReadFile(filePath)
// 		check(err)
// 		json.Unmarshal([]byte(data), &rec)
// 		if strings.HasPrefix(strings.TrimRight(f.Name(), ".json"), cid) && 
// 			strings.HasPrefix(rec.TargetTag, target_tag) &&
// 			strings.HasPrefix(rec.TargetId, target_id) &&
// 			(target_size == "" || strconv.Itoa(rec.TargetSize) == target_size) &&
// 			(token_size == "" ||  strconv.Itoa(rec.TokenSize) == token_size)  {
// 			fmt.Fprint(w, string(data))
// 		}
// 		rec = Recipe{}
	
// 	}
// }


// func search(w http.ResponseWriter, r *http.Request) {
// 	var filePath string
// 	var formula Formula
// 	var data []byte
// 	validSearchParams := map[string]bool{"cid": true, "target_size"	: true,
// 	"target_id": true, "token_size": true,"target_tag": true}

// 	r.ParseForm()

// 	for  searchParam, _ := range r.Form {
// 		if _, valid := validSearchParams[searchParam]; !valid {
// 			fmt.Fprint(w, "Invalid search parameter:" + searchParam)
// 			return
// 		}
// 	} 

// 	cid := r.FormValue("cid")
// 	target_size := r.FormValue("target_size")
// 	target_tag := r.FormValue("target_tag")
// 	target_id := r.FormValue("target_id")
// 	token_size := r.FormValue("token_size")


// 	conn := redisPool.Get()
// 	defer conn.Close()
	
// 	if err := ping(conn); err != nil{
// 		http.Error(w, err.Error(), 500)
// 		return 
// 	}

// 	for  { //every key in redis
// 		//open connection ->ping
		
// 		jsonData, err := redis.String(conn.Do("HGET", cid, "json")) 

// 		json.Unmarshal([]byte(data), &formula)
		
// 		if strings.HasPrefix(HASHKEY, cid) && 
// 			strings.HasPrefix(formula.TargetTag, target_tag) &&
// 			strings.HasPrefix(formula.TargetId, target_id) &&
// 			(target_size == "" || strconv.Itoa(formula.TargetSize) == target_size) &&
// 			(token_size == "" ||  strconv.Itoa(formula.TokenSize) == token_size)  {
// 			fmt.Fprint(w, string(jsonData))
// 		}
// 		formula = Recipe{}
	
// 	}
// }



// func serveRawFile(w http.ResponseWriter, r *http.Request) {
// 	var data []byte
// 	var mime string
// 	var formula Formula
// 	var filePath string
// 	var metaDataPath string

// 	vars := mux.Vars(r)
// 	publicPath := "out/public/" //path to be updated
// 	rawPath := "out/raw/" //path to be updated 

// 	//Finds MIME from corresponding metadata file with target_id = cid 
// 	files, err := ioutil.ReadDir(publicPath)
// 	for _, f := range files {
// 		metaDataPath = publicPath + f.Name() 
// 		data, err = ioutil.ReadFile(metaDataPath)
// 		check(err)
// 		json.Unmarshal([]byte(data), &formula)
// 		if vars["cid"] == formula.TargetId{
// 			mime = formula.Mime
// 		}	
// 	}

// 	//Sets http response header (Content-type) based on MIME
// 	if mime != "" {	
// 		w.Header().Set("Content-Type", mime)
// 	}
// 	filePath = rawPath + vars["cid"]
// 	data, err = ioutil.ReadFile(filePath)
// 	fmt.Fprint(w,data)
// }



func getHash(cid string) (Hash, error) {
	var h Hash
	conn := redisPool.Get()
	defer conn.Close()

	if err := ping(conn); err != nil{
		return h, err
	}

	jsonData, err := redis.String(conn.Do("HGET", cid, "json")) 
	if err != nil{
		return h, err	
	} else {
		h.JsonData = jsonData
	}

	rawData, err := redis.Bytes(conn.Do("HGET", cid, "raw")) 
	if err != nil{
		return h, err	
	} else {
		h.RawData = rawData
	}

	return h, nil
}


func serveRawFromRedis(w http.ResponseWriter, r *http.Request){
	var f Formula
	vars := mux.Vars(r)
	
	h, err := getHash(vars["cid"])
	if err != nil{ 
		http.Error(w, err.Error(), 500)
		return
	}	
	
	json.Unmarshal([]byte(h.JsonData), &f)
	if f.Mime != "" {	
		w.Header().Set("Content-Type", f.Mime)
	}
	
	fmt.Fprint(w, h.RawData)

}



func upload(w http.ResponseWriter, r *http.Request) {
	

	switch method := r.Method; method {
	case "GET":
		t, _ := template.ParseFiles("upload.gtpl")
		t.Execute(w, nil)
	
	case "POST":

		jsonFile, _, err := r.FormFile("uploadJson")
		rawFile, handler, err2 := r.FormFile("uploadRaw") //same handler??
		defer jsonFile.Close()
		defer rawFile.Close()


		if err != nil || err2 != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		jsonBuf := bytes.NewBuffer(nil)
		rawBuf := bytes.NewBuffer(nil)
		_, err = io.Copy(jsonBuf, jsonFile)
		_, err2 = io.Copy(rawBuf, rawFile)

		if err != nil || err2 != nil{
			http.Error(w, err.Error(), 500)
			return 
		}
		
		conn := redisPool.Get()
		defer conn.Close()

		
		if err := ping(conn); err != nil{
			http.Error(w, err.Error(), 500)
			return 
		}
	
		_, err = conn.Do("HMSET", handler.Filename, "json",jsonBuf.String(), "raw", rawBuf)
		
		if err != nil{
			fmt.Fprint(w, "Insertion FAIL")
		} else {
			fmt.Fprint(w, "OK")
		}

	default:
		fmt.Fprintf(w, "Method %s not supported", method)
	}
 }


func ping(conn redis.Conn) error {
	_, err := redis.String(conn.Do("PING"))
	if err != nil {
		return err
	}
	return nil
}


func NewRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/upload", upload)
	// r.HandleFunc("/search", displayJson).Methods("GET")
	r.HandleFunc("/raw/redis/{cid}", serveRawFromRedis).Methods("GET")
	// r.HandleFunc("/raw/{cid}", serveRawFile).Methods("GET")
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("build"))) //path to be updated 
	return r
}

