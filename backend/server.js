const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const oracledb = require("oracledb");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración Oracle
const dbConfig = {
  user: "ADMIN",
  password: "Meruemgato141#",
  connectString: "localhost/XEPDB1"
};

// Endpoint para obtener habitaciones
app.get("/api/habitaciones", async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute("SELECT * FROM habitaciones");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en la BD");
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});

// Endpoint para agregar habitación
app.post("/api/habitaciones", async (req, res) => {
  const { numero, tipo, precio } = req.body;
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    await connection.execute(
      "INSERT INTO habitaciones (numero, tipo, precio) VALUES (:1, :2, :3)",
      [numero, tipo, precio],
      { autoCommit: true }
    );
    res.send("Habitación registrada");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en la BD");
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});

app.listen(3000, () => {
  console.log("Servidor backend corriendo en http://localhost:3000");
});
