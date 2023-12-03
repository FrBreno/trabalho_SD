const connection = require('./connection');

const getByID = async (id) => {
  const [voo] = await connection.execute(
    'SELECT * FROM passagens WHERE id = ?;',
    [id]
  );
  return voo;
}

module.exports = {
  getByID,
};