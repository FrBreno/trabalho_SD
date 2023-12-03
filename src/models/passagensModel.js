const connection = require('./connection');

const getAll = async () => {
  const [passagens] = await connection.execute(
    'SELECT * FROM passagens;'
  );
  return passagens;
};

module.exports = {
  getAll,
};