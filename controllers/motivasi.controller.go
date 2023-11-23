package controllers

import (
	"authapi/models"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type MotivasiController struct {
	DB *gorm.DB
}

func NewMotivasiController(DB *gorm.DB) MotivasiController {
	return MotivasiController{DB}
}

func (mc *MotivasiController) CreateMotivasi(ctx *gin.Context) {
	var payload *models.CreateMotivasi
	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"status": "fail", "message": err.Error()})
		return
	}

	motivasi := models.Motivasi{
		Quotes:    payload.Quotes,
		Category:  payload.Category,
		Motivator: payload.Motivator,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	if result := mc.DB.Create(&motivasi); result.Error != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"status": "fail", "message": "Failed to create motivasi"})
		return
	}

	response := models.MotivasiResponse{
		ID:        motivasi.ID,
		Quotes:    motivasi.Quotes,
		Category:  motivasi.Category,
		Motivator: motivasi.Motivator,
		CreatedAt: motivasi.CreatedAt,
		UpdatedAt: motivasi.UpdatedAt,
	}

	ctx.JSON(http.StatusCreated, gin.H{"status": "success", "data": response})
}

func (mc *MotivasiController) GetAllMotivasi(ctx *gin.Context) {
	var motivasis []models.Motivasi
	if result := mc.DB.Find(&motivasis); result.Error != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"status": "fail", "message": "Failed to fetch motivasi"})
		return
	}

	var motivasiResponses []models.MotivasiResponse
	for _, motivasi := range motivasis {
		motivasiResponses = append(motivasiResponses, models.MotivasiResponse{
			ID:        motivasi.ID,
			Quotes:    motivasi.Quotes,
			Category:  motivasi.Category,
			Motivator: motivasi.Motivator,
			CreatedAt: motivasi.CreatedAt,
			UpdatedAt: motivasi.UpdatedAt,
		})
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "data": motivasiResponses})
}
