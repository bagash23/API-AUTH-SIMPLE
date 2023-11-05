# Golang
Berikut ada documentasi untuk menggunakan API ini 

## Nama Database
AUTH_TASK_PERTAMA

## List API
<li>http://localhost:8000/api/auth/register</li>
```bash
  Request API [ POST ]
  
  1."name": string,
  2."profesi": string,
  3."email": string,
  4."photo": string,
  5."password": string,
  6."passwordConfirm": string

## Migrasi database
```bash
go run migrate/migrate.go
```
## Start Server Golang
```bash
go run main.go
```
