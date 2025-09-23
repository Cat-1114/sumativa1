const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./hotel.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS reservas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente TEXT,
    habitacion TEXT,
    fechaEntrada TEXT,
    fechaSalida TEXT
  )`);
});

module.exports = db;
