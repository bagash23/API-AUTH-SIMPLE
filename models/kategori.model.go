package models

import "time"

type Kategori struct {
	ID        int    `gorm:"autoIncrement;primaryKey" json:"id"`
	Category  string `gorm:"type:varchar(255);not null"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

type CreateCategory struct {
	Category string `json:"category"  binding:"required"`
}

type KategoriResponse struct {
	ID        int       `json:"id,omitempty"`
	Category  string    `json:"category,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
