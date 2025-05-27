const canteiroModel = require('../models/canteiroModel');

const getAllCanteiros = async (req, res) => {
  try {
    const canteiros = await canteiroModel.getAllCanteiros();
    return res.status(200).json(canteiros);
  } catch (error) {
    console.error('Erro ao buscar canteiros:', error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

const createCanteiro = async (req, res) => {
  try {
    const {
      codigo,
      endereco, // objeto
      responsavel,
      status
    } = req.body;

    const { cep, rua, numero, complemento, bairro, cidade, estado } = endereco;

    if (!codigo || !cep || !rua || !numero || !bairro || !cidade || !estado || !responsavel || !status) {
      return res.status(400).json({ message: 'Campos obrigatórios faltando' });
    }

    const result = await canteiroModel.createCanteiro(
      codigo,
      cep,
      rua,
      numero,
      complemento || null,
      bairro,
      cidade,
      estado,
      responsavel,
      status
    );

    return res.status(201).json({
      message: 'Canteiro criado com sucesso',
      id: result.insertId
    });
  } catch (error) {
    console.error('Erro ao criar canteiro:', error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

module.exports = {
  getAllCanteiros,
  createCanteiro,
};
