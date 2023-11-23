package main

import (
	"authapi/initializers"
	"authapi/models"
	"fmt"
	"log"
)

func init() {
	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("Could not load environment variables", err)
	}
	initializers.ConnectDB(&config)
}

func main() {
	initializers.DB.AutoMigrate(&models.User{})
	initializers.DB.AutoMigrate(&models.Motivasi{})
	initializers.DB.AutoMigrate(&models.Kategori{})
	fmt.Println("Migration complete")
}
