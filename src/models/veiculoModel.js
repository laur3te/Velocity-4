const connection = require("./connection");

const insertVeiculo = async (veiculo) => {
  const { frota, tipo_veiculo, placa, capacidade } = veiculo;

  const query = `
    INSERT INTO veiculos (frota, tipo_veiculo, placa, capacidade)
    VALUES (?, ?, ?, ?)
  `;

  const values = [frota, tipo_veiculo, placa, capacidade];
  const result = await connection.query(query, values);
  return result;
};

module.exports = {
  insertVeiculo,
};
