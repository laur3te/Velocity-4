const express = require("express");
const userController = require("./controllers/userController");
const router = express.Router();
const connection = require("./models/connection");
const alojamentoController = require("./controllers/alojamentoController");
const veiculoController = require("./controllers/veiculoController");
const canteiroController = require("./controllers/canteiroController")

router.get("/funcionarios", userController.getAll);
router.post("/funcionarios", userController.postUser);
router.post("/veiculos", veiculoController.postVeiculo);
router.post("/alojamento", alojamentoController.create);
router.post("/canteiros", canteiroController.createCanteiro);
router.get("/canteiros", canteiroController.getAllCanteiros)

router.get("/teste-banco", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT 1");
    res.send(" Conexão com banco bem-sucedida!");
  } catch (error) {
    console.error("Erro ao conectar com o banco:", error);
    res.status(500).send(" Erro ao conectar com o banco: " + error.message);
  }
});

router.get("/alojamentos", alojamentoController.getAll);

module.exports = router;
