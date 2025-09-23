const db = require("../db");

class Reserva {
  static create(data, callback) {
    const { cliente, habitacion, fechaEntrada, fechaSalida } = data;
    db.run(
      "INSERT INTO reservas (cliente, habitacion, fechaEntrada, fechaSalida) VALUES (?, ?, ?, ?)",
      [cliente, habitacion, fechaEntrada, fechaSalida],
      function (err) {
        callback(err, { id: this.lastID, ...data });
      }
    );
  }

  static findAll(callback) {
    db.all("SELECT * FROM reservas", [], callback);
  }

  static findById(id, callback) {
    db.get("SELECT * FROM reservas WHERE id = ?", [id], callback);
  }

  static update(id, data, callback) {
    const { cliente, habitacion, fechaEntrada, fechaSalida } = data;
    db.run(
      "UPDATE reservas SET cliente=?, habitacion=?, fechaEntrada=?, fechaSalida=? WHERE id=?",
      [cliente, habitacion, fechaEntrada, fechaSalida, id],
      function (err) {
        callback(err, { changes: this.changes });
      }
    );
  }

  static delete(id, callback) {
    db.run("DELETE FROM reservas WHERE id=?", [id], function (err) {
      callback(err, { changes: this.changes });
    });
  }
}

module.exports = Reserva;
