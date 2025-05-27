const AlojamentoModel = require("../models/alojamentoModel");

// GET /alojamentos
const getAll = async (req, res) => {
  try {
    const alojamentos = await AlojamentoModel.getAll();
    res.json(alojamentos);
  } catch (error) {
    console.error("Erro ao buscar alojamentos:", error);
    res.status(500).json({ message: "Erro ao buscar alojamentos" });
  }
};

// POST /alojamento
const create = async (req, res) => {
  try {
    const { postalCode, street, number, neighborhood, city, residents } =
      req.body;

    if (
      !postalCode ||
      !street ||
      !number ||
      !neighborhood ||
      !city ||
      !residents
    ) {
      return res.status(400).json({ message: "Campos obrigatórios faltando." });
    }

    await AlojamentoModel.createRepublica({
      cep: postalCode,
      rua: street,
      numero: number,
      bairro: neighborhood,
      cidade: city,
      moradores: parseInt(residents),
    });

    res.status(201).json({ message: "República cadastrada com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar república:", error);
    res.status(500).json({ message: "Erro ao cadastrar república" });
  }
};

module.exports = {
  getAll,
  create,
};
