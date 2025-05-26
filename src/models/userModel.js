const connection = require('./connection');

const getAll = async () => {
  const [funcionarios] = await connection.execute(`
    SELECT f.*, a.nome AS nome_alojamento
    FROM Funcionarios f
    LEFT JOIN alojamentos a ON f.alojamento_id = a.id
  `);
  return funcionarios;
};

const postUser = async (user) => {
  const { nome, matricula, funcao, perfil, cpf, status, alocacao } = user;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = `
    INSERT INTO Funcionarios
    (nome, matricula, funcao, perfil, cpf, status, data_cadastro, alojamento_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [newUser] = await connection.execute(query, [
    nome,
    matricula,
    funcao,
    perfil,
    cpf,
    status,
    dateUTC,
    alocacao // ← ID vindo do front-end, será gravado como alojamento_id
  ]);

  return newUser;
};

module.exports = {
  getAll,
  postUser
};
