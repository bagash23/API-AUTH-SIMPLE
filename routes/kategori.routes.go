package routes

import (
	"authapi/controllers"
	"authapi/middleware"

	"github.com/gin-gonic/gin"
)

type KategoriRouteController struct {
	kategoriController controllers.KategoriController
}

func NewKategoriRouteController(kategoriController controllers.KategoriController) KategoriRouteController {
	return KategoriRouteController{kategoriController}
}

func (kc *KategoriRouteController) KategoriRoute(rg *gin.RouterGroup) {
	router := rg.Group("/kategori")
	router.POST("/create-kategori", middleware.DeserializeUser(), kc.kategoriController.CreateKategori)
	router.GET("/all-kategori", middleware.DeserializeUser(), kc.kategoriController.GetAllKategori)
	router.PUT("/edit-kategori/:id", middleware.DeserializeUser(), kc.kategoriController.EditKategori)
	router.DELETE("/delete-kategori/:id", middleware.DeserializeUser(), kc.kategoriController.DeleteKategori)
}
