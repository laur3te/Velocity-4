const connection = require("./connection");

// Buscar todos os alojamentos ativos
const getAll = async () => {
  const [rows] = await connection.query(
    "SELECT id, nome FROM alojamentos WHERE ativo = TRUE"
  );
  return rows;
};

// Inserir novo alojamento
const createRepublica = async ({
  cep,
  rua,
  numero,
  bairro,
  cidade,
  moradores,
}) => {
  const query = `
    INSERT INTO alojamentos (cep, rua, numero, bairro, cidade, moradores)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await connection.execute(query, [
    cep,
    rua,
    numero,
    bairro,
    cidade,
    moradores,
  ]);
  return result;
};

module.exports = {
  getAll,
  createRepublica,
};
