const connection = require('./connection');

const getAll = async () => {
  const [voos] = await connection.execute(
    'SELECT * FROM voos;'
  );
  return voos;
}

const getByID = async (id) => {
  const [voo] = await connection.execute(
    'SELECT * FROM voos WHERE id = ?;',
    [id]
  );
  return voo;
}

module.exports = {
  getByID,
  getAll,
};