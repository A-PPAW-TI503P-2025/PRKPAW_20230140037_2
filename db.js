const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'prad1pta_____',  // kosong kalau MySQL kamu tidak pakai password
  database: 'praktikum_20230140037_db'
});

module.exports = db;
