const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reservaController");

router.post("/", reservaController.createReserva);
router.get("/", reservaController.getReservas);
router.get("/:id", reservaController.getReserva);
router.put("/:id", reservaController.updateReserva);
router.delete("/:id", reservaController.deleteReserva);

module.exports = router;
