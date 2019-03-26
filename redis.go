package server

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/gomodule/redigo/redis"
)

var (
	redisPool *redis.Pool
)

//Ping tests the connection to the redis db using PING
func ping(conn redis.Conn) error {
	_, err := redis.String(conn.Do("PING"))
	if err != nil {
		return err
	}
	return nil
}

//InitRedis initializes redis pool
func InitRedis(redisAddr string) {
	redisPool = &redis.Pool{
		MaxIdle:     3,
		IdleTimeout: 240 * time.Second,
		Dial:        func() (redis.Conn, error) { return redis.Dial("tcp", redisAddr) },
	}
}

// GetWasmInfo for getting information about wasm from storage
func GetWasmInfo(wasmName string) (wasmDoi string, glueDoi string, err error) {
	connection := redisPool.Get()
	defer connection.Close()
	if err := ping(connection); err != nil {
		return "", "", fmt.Errorf("error check connection with storage %s", err.Error())
	}

	data, err := connection.Do("hgetall", wasmName)
	if err != nil {
		return "", "", fmt.Errorf("%s not found in server %s", wasmName, err.Error())
	}

	var e error
	smData, err := redis.StringMap(data, e)
	if err != nil {
		return "", "", fmt.Errorf("%s error data format %s", wasmName, err.Error())
	}

	wasmDoi, present := smData["wasmDoi"]
	if !present {
		return "", "", fmt.Errorf("can't find 'wasmDoi' field for %s", wasmName)
	}

	glueDoi, _ = smData["glueDoi"]

	return wasmDoi, glueDoi, nil
}

// GetDataByDoi for getting raw data from storage by doi
func GetDataByDoi(doi string) (rawData []byte, err error) {

	connection := redisPool.Get()
	defer connection.Close()
	if err := ping(connection); err != nil {
		return nil, fmt.Errorf("error check connection with storage %s", err.Error())
	}

	data, err := redis.Bytes(connection.Do("hget", doi, "raw"))
	if err != nil {
		return nil, fmt.Errorf("data object not found %s", err.Error())
	}

	return data, nil
}

// InsertDataWithManifest for insertion to storage manifest and data with description
func InsertDataWithManifest(rawData []byte, manifest Manifest, description string) (err error) {

	jsonManifest, err := manifest.ToJSON()
	if err != nil {
		return fmt.Errorf("error convert manifest to JSON %s", err.Error())
	}

	connection := redisPool.Get()
	defer connection.Close()
	if err := ping(connection); err != nil {
		return fmt.Errorf("error check connection with storage %s", err.Error())
	}

	if 0 != len(rawData) && 0 != len(description) {
		_, err = connection.Do("hmset", manifest.Doi.SHA256, "manifest", string(jsonManifest), "raw", rawData, "descr", description)
		if err != nil {
			return fmt.Errorf("error execution 'hset' with storage %s", err.Error())
		}
	}

	if 0 == len(rawData) && 0 != len(description) {
		_, err = connection.Do("hmset", manifest.Doi.SHA256, "manifest", string(jsonManifest), "descr", description)
		if err != nil {
			return fmt.Errorf("error execution 'hset' with storage %s", err.Error())
		}
	}

	return nil /*no error*/
}

// AddFormulaToManifest for ...
// If manifest is not in storage -> insert it with given formula
// If manifest is in storage -> read manifest -> add to manifest formula -> store updated manifest
func AddFormulaToManifest(manifest Manifest, formula Formula, description string) (resManifest *Manifest, err error) {

	connection := redisPool.Get()
	defer connection.Close()
	if err := ping(connection); err != nil {
		return nil, fmt.Errorf("error check connection with storage %s", err.Error())
	}

	data, err := connection.Do("hgetall", manifest.Doi.SHA256)
	if err != nil {
		return nil, fmt.Errorf("%s error 'hgetall' %s", manifest.Doi.SHA256, err.Error())
	}

	var e error
	smData, err := redis.StringMap(data, e)
	if err != nil {
		return nil, fmt.Errorf("%s error data format %s", manifest.Doi.SHA256, err.Error())
	}

	if 0 == len(smData) {
		// no manifest in storage, insert new (don't forget add formula to manifest before insertion!)
		manifest.AddFormula(formula)
		err = InsertDataWithManifest(nil, manifest, description)
		if err != nil {
			return &manifest, fmt.Errorf("error of insertion data with manifest to storage %s", err.Error())
		}

		return &manifest, nil

	}

	// update existing manifest
	existingManifestAsStr, present := smData["manifest"]
	if !present {
		return nil, fmt.Errorf("can't find 'manifest' field for %s", manifest.Doi.SHA256)
	}

	var existingManifest Manifest
	err = json.Unmarshal([]byte(existingManifestAsStr), &existingManifest)
	if err != nil {
		return nil, fmt.Errorf("error parsin manifest as json %s", err.Error())
	}

	// check formulas in existing manifest for containing given formula
	for _, v := range existingManifest.Formulas {
		existingFormula, _ := json.Marshal(&v)
		newFormula, _ := json.Marshal(&formula)
		if string(existingFormula) == string(newFormula) {
			return &existingManifest, nil
		}
	}

	// add formula to existing manifest and insert it to storage
	existingManifest.AddFormula(formula)

	formattedManifest, _ := existingManifest.ToJSON()

	_, err = connection.Do("hmset", existingManifest.Doi.SHA256, "manifest", string(formattedManifest))
	if err != nil {
		return nil, fmt.Errorf("error execution 'hset' with storage %s", err.Error())
	}

	return &existingManifest, nil
}

// GetAllManifests for getting all manifests from storage
func GetAllManifests() (manifests []Manifest, err error) {

	connection := redisPool.Get()
	defer connection.Close()
	if err := ping(connection); err != nil {
		return nil, fmt.Errorf("error check connection with storage %s", err.Error())
	}

	data, err := connection.Do("keys", "*")
	if err != nil {
		return nil, fmt.Errorf("error execution 'keys *' %s", err.Error())
	}

	var e error
	keys, _ := redis.Strings(data, e)

	for _, key := range keys {

		rawMan, err := connection.Do("hget", key, "manifest")

		if nil == err {

			strMan, err := redis.String(rawMan, e)

			if nil == err {

				var manifest Manifest

				err = json.Unmarshal([]byte(strMan), &manifest)

				if nil == err {
					manifests = append(manifests, manifest)
				}

			}
		}

	}

	return manifests, nil
}

// GetManifestsWithActorDoi for getting manifests from storage with given actor doi
func GetManifestsWithActorDoi(actorDoi string) (manifests []Manifest, err error) {

	allManifests, err := GetAllManifests()
	if err != nil {
		return nil, fmt.Errorf("failed get all manifests %s", err.Error())
	}

	for _, manifest := range allManifests {

		if 0 != len(manifest.Formulas) {

			for _, formula := range manifest.Formulas {

				if actorDoi == formula.Actor["wasm"].Doi.SHA256 {

					manifests = append(manifests, manifest)
					break
				}
			}
		}

	}

	return manifests, nil
}

// GetManifestByDoi for getting manifest by doi
func GetManifestByDoi(doi string) (manifest *Manifest, err error) {
	connection := redisPool.Get()
	defer connection.Close()
	if err := ping(connection); err != nil {
		return nil, fmt.Errorf("error check connection with storage %s", err.Error())
	}

	data, err := connection.Do("hgetall", doi)
	if err != nil {
		return nil, fmt.Errorf("%s not found in server %s", doi, err.Error())
	}

	var e error
	smData, err := redis.StringMap(data, e)
	if err != nil {
		return nil, fmt.Errorf("%s error data format %s", doi, err.Error())
	}

	strManifest, present := smData["manifest"]
	if !present {
		return nil, fmt.Errorf("can't find 'manifest' field for %s", doi)
	}

	var parsedManifest Manifest
	err = json.Unmarshal([]byte(strManifest), &parsedManifest)
	if err != nil {
		return nil, fmt.Errorf("error parsing manifest as json %s", err.Error())
	}

	return &parsedManifest, nil
}

// GetDescriptionByDoi for getting description by doi
func GetDescriptionByDoi(doi string) (description string, err error) {
	connection := redisPool.Get()
	defer connection.Close()
	if err := ping(connection); err != nil {
		return "", fmt.Errorf("error check connection with storage %s", err.Error())
	}

	data, err := connection.Do("hgetall", doi)
	if err != nil {
		return "", fmt.Errorf("%s not found in server %s", doi, err.Error())
	}

	var e error
	smData, err := redis.StringMap(data, e)
	if err != nil {
		return "", fmt.Errorf("%s error data format %s", doi, err.Error())
	}

	descr, present := smData["descr"]
	if !present {
		return "", fmt.Errorf("can't find 'descr' field for %s", doi)
	}

	return descr, nil
}
