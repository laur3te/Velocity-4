const connection = require("./connection");

const getAllCanteiros = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM canteiros WHERE status = 'ativo'"
  );

  // Agrupar os campos em um objeto "endereco" para cada canteiro
  const canteiros = rows.map((row) => ({
    id: row.id,
    codigo: row.codigo,
    endereco: {
      cep: row.cep,
      rua: row.rua,
      numero: row.numero,
      complemento: row.complemento,
      bairro: row.bairro,
      cidade: row.cidade,
      estado: row.estado,
    },
    responsavel: row.responsavel,
    status: row.status,
    dataCadastro: row.data_cadastro,
  }));

  return canteiros;
};

const createCanteiro = async (
  codigo,
  cep,
  rua,
  numero,
  complemento,
  bairro,
  cidade,
  estado,
  responsavel,
  status
) => {
  const query = `
    INSERT INTO canteiros (
      codigo, cep, rua, numero, complemento,
      bairro, cidade, estado, responsavel, status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [result] = await connection.execute(query, [
    codigo,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    responsavel,
    status,
  ]);

  return result;
};

module.exports = {
  getAllCanteiros,
  createCanteiro,
};
