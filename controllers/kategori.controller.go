package controllers

import (
	"authapi/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type KategoriController struct {
	DB *gorm.DB
}

func NewKategoriController(DB *gorm.DB) KategoriController {
	return KategoriController{DB}
}

func (kc *KategoriController) CreateKategori(ctx *gin.Context) {
	var payload models.CreateCategory
	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"status": "fail", "message": err.Error()})
		return
	}

	kategori := models.Kategori{
		Category: payload.Category,
	}

	if result := kc.DB.Create(&kategori); result.Error != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"status": "fail", "message": "Failed to create category"})
		return
	}

	response := models.KategoriResponse{
		ID:        kategori.ID,
		Category:  kategori.Category,
		CreatedAt: kategori.CreatedAt,
		UpdatedAt: kategori.UpdatedAt,
	}

	ctx.JSON(http.StatusCreated, gin.H{"status": "success", "data": response})
}

func (kc *KategoriController) GetAllKategori(ctx *gin.Context) {
	var kategoris []models.Kategori
	if result := kc.DB.Find(&kategoris); result.Error != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"status": "fail", "message": "Failed to fetch categories"})
		return
	}

	var kategoriList []gin.H
	for _, kat := range kategoris {
		kategoriList = append(kategoriList, gin.H{
			"id":       kat.ID,
			"category": kat.Category,
		})
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "data": kategoriList})
}

func (kc *KategoriController) EditKategori(ctx *gin.Context) {
	var kategori models.Kategori
	kategoriID := ctx.Param("id")

	if err := kc.DB.First(&kategori, kategoriID).Error; err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"status": "fail", "message": "Kategori not found"})
		return
	}

	var payload models.CreateCategory
	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"status": "fail", "message": err.Error()})
		return
	}

	kategori.Category = payload.Category

	if err := kc.DB.Save(&kategori).Error; err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"status": "fail", "message": "Failed to update kategori"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "data": kategori})
}

func (kc *KategoriController) DeleteKategori(ctx *gin.Context) {
	var kategori models.Kategori
	kategoriID := ctx.Param("id")

	if err := kc.DB.First(&kategori, kategoriID).Error; err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"status": "fail", "message": "Kategori not found"})
		return
	}

	if err := kc.DB.Delete(&kategori).Error; err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"status": "fail", "message": "Failed to delete kategori"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success", "message": "Kategori deleted"})
}
