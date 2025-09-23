const Reserva = require("../models/reserva");

exports.createReserva = (req, res) => {
  Reserva.create(req.body, (err, reserva) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(reserva);
  });
};

exports.getReservas = (req, res) => {
  Reserva.findAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getReserva = (req, res) => {
  Reserva.findById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
};

exports.updateReserva = (req, res) => {
  Reserva.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.deleteReserva = (req, res) => {
  Reserva.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};
