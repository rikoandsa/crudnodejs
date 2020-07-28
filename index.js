// inisialisasi semua modul
const path = require("path");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const app = express();

app.listen(4000, () => {
  console.log("Server berjalan di 127.0.0.1:4000");
});
