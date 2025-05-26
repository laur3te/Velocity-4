// controllers/veiculoController.js
const veiculoModel = require("../models/veiculoModel");

const postVeiculo = async (req, res) => {
  try {
    const novoVeiculo = await veiculoModel.insertVeiculo(req.body);
    res.status(201).json(novoVeiculo);
  } catch (error) {
    console.error("Erro ao cadastrar veículo:", error);
    res.status(500).json({ error: "Erro ao cadastrar veículo" });
  }
};

module.exports = {
  postVeiculo,
};
