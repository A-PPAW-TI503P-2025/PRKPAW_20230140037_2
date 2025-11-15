const db = require('./db');

db.query("SELECT 1", (err, result) => {
  if (err) console.log("ERROR:", err);
  else console.log("Koneksi Berhasil:", result);
});
