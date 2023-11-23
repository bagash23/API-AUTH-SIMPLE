package routes

import (
	"authapi/controllers"
	"authapi/middleware"

	"github.com/gin-gonic/gin"
)

type MotivasiRouteController struct {
	motivasiController controllers.MotivasiController
}

func NewMotivasiRouteController(motivasiController controllers.MotivasiController) MotivasiRouteController {
	return MotivasiRouteController{motivasiController}
}

func (rc *MotivasiRouteController) MotivasiRoute(rg *gin.RouterGroup) {
	router := rg.Group("/motivasi")
	router.POST("/create-motivasi", middleware.DeserializeUser(), rc.motivasiController.CreateMotivasi)
	router.GET("/get-all-motivasi", middleware.DeserializeUser(), rc.motivasiController.GetAllMotivasi)
}
