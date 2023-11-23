package models

import "time"

type Motivasi struct {
	ID        int    `gorm:"autoIncrement;primaryKey" json:"id"`
	Quotes    string `gorm:"type:varchar(255);not null"`
	Category  string `gorm:"type:varchar(255);not null"`
	Motivator string `gorm:"type:varchar(255);not null"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

type CreateMotivasi struct {
	Motivator string `json:"motivator" binding:"required"`
	Category  string `json:"category"  binding:"required"`
	Quotes    string `json:"quotes"  binding:"required"`
}

type MotivasiResponse struct {
	ID        int       `json:"id,omitempty"`
	Quotes    string    `json:"quotes,omitempty"`
	Category  string    `json:"category,omitempty"`
	Motivator string    `json:"motivator,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
