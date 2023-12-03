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

const updatePass = async (passage, id) => {
  const { idVoo, nome, preco, bagagem, primeiraClasse, servicoLuxo } = passage;
  await connection.execute(
    'UPDATE passagens SET idVoo = ?, nome = ?, preco = ?, bagagem = ?, primeiraClasse = ?, servicoLuxo = ? WHERE id = ?;',
    [idVoo, nome, preco, bagagem, primeiraClasse, servicoLuxo, id]
  );
  return;
};

const deletePass = async (id) => {
  await connection.execute(
    'DELETE FROM passagens WHERE id = ?;',
    [id]
  );
  return
}

module.exports = {
  getAll,
  getByID,
  createPassage,
  updatePass,
  deletePass
};