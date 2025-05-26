const AlojamentoModel = require('../models/alojamentoModel');

const getAll = async (req, res) => {
  try {
    const alojamentos = await AlojamentoModel.getAll();
    res.json(alojamentos);
  } catch (error) {
    console.error('Erro ao buscar alojamentos:', error);
    res.status(500).json({ message: 'Erro ao buscar alojamentos' });
  }
};

module.exports = { getAll };
