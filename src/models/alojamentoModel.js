const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.query('SELECT id, nome FROM alojamentos WHERE ativo = TRUE');
  return rows;
};

module.exports = { getAll };
