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
<li>http://localhost:8000/api/kategori/create-kategori</li>
<li>http://localhost:8000/api/kategori/edit-kategori/:id</li>
<li>http://localhost:8000/api/kategori/delete-kategori/:id</li>
<li>http://localhost:8000/api/motivasi/create-motivasi</li>

## List API metode [ GET ]
<li>http://localhost:8000/api/kategori/all-kategori</li>
<li>http://localhost:8000/api/motivasi/get-all-motivasi</li>


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

## Request API Create Kategori
<li>Authorization Bearer Token</li>
<li>"category": string</li>

## Request API Create Motivasi
<li>"motivator" : string</li>
<li>"category" : string</li>
<li>"quotes" : string</li>

