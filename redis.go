package server

import (
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
