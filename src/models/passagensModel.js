const connection = require('./connection');

const getAll = async () => {
  const [passagens] = await connection.execute(
    'SELECT * FROM passagens;'
  );
  return passagens;
};

const getByID = async (id) => {
  const [passagem] = await connection.execute(
    'SELECT * FROM passagens WHERE id = ?;',
    [id]
  );
  return passagem;
}

const createPassage = async (passage) => {
  const { idVoo, nome, preco, bagagem, primeiraClasse, servicoLuxo } = passage;
  const [newPassage] = await connection.execute(
    'INSERT INTO passagens (idVoo, nome, preco, bagagem, primeiraClasse, servicoLuxo) VALUES (?, ?, ?, ?, ?, ?);',
    [idVoo, nome, preco, bagagem, primeiraClasse, servicoLuxo]
  );
  return newPassage;
};

module.exports = {
  getAll,
  getByID,
  createPassage,
};