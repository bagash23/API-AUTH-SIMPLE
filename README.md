# Golang
Berikut ada documentasi untuk menggunakan API ini 

## Nama Database
AUTH_TASK_PERTAMA

## Migrasi database
```bash
go run migrate/migrate.go
```
## Start Server Golang
```bash
go run main.go
```

## List API metode [ POST ]
<li>http://localhost:8000/api/auth/register</li>
<li>http://localhost:8000/api/auth/login</li>

## Request API Reguster
<li> "name": string</li>
<li> "profesi": string</li>
<li> "email": string</li>
<li> "photo": string</li>
<li> "password": string</li>
<li> "passwordConfirm": string</li>

## Reqyest API Login
<li> "email": string</li>
<li> "password": string</li>
