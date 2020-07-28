// inisialisasi semua modul
const path = require("path");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
// insialisasi engine hbs
const hbs = require("hbs");

//
app.listen(4000, () => {
  console.log("Server berjalan di 127.0.0.1:4000");
});

// membuat koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crudjs",
});

// koneksi ke database
conn.connect((err) => {
  if (err) throw err;
  console.log("Database terkoneksi");
});
