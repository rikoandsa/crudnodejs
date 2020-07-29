// inisialisasi semua modul
const path = require("path");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
// insialisasi engine hbs
const hbs = require("hbs");
const { execPath } = require("process");

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
  // jika koneksi ke database error
  if (err) throw err;
  // jika koneksi berhasil maka tampil...
  console.log("Database terkoneksi");
});

// set view file kedirektori view
app.set("views", path.join(__dirname, "views"));
// set view engine menggunakan hbs
app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set folder public sebagai static folder untuk file static
app.use("/assets", express.static(__dirname + "/public"));
