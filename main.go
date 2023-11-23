package main

import (
	"authapi/controllers"
	"authapi/initializers"
	"authapi/routes"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var (
	server *gin.Engine

	AuthController          controllers.AuthController
	AuthRouteController     routes.AuthRouteController
	MotivasiController      controllers.MotivasiController
	MotivasiRouteController routes.MotivasiRouteController
	KategoriController      controllers.KategoriController
	KategoriRouteController routes.KategoriRouteController
)

func init() {
	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("Could not load environment variables", err)
	}

	initializers.ConnectDB(&config)

	AuthController = controllers.NewAuthController(initializers.DB)
	AuthRouteController = routes.NewAuthRouteController(AuthController)

	MotivasiController = controllers.NewMotivasiController(initializers.DB)
	MotivasiRouteController = routes.NewMotivasiRouteController(MotivasiController)

	KategoriController = controllers.NewKategoriController(initializers.DB)
	KategoriRouteController = routes.NewKategoriRouteController(KategoriController)

	server = gin.Default()
}

func main() {
	config, err := initializers.LoadConfig(".")
	if err != nil {
		log.Fatal("Could not load environment variables", err)
	}

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://localhost:8000", config.ClientOrigin}
	corsConfig.AllowCredentials = true

	server.Use(cors.New(corsConfig))
	router := server.Group("/api")
	AuthRouteController.AuthRoute(router)
	MotivasiRouteController.MotivasiRoute(router)
	KategoriRouteController.KategoriRoute(router)
	log.Fatal(server.Run(":" + config.ServerPort))
}
