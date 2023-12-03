const passagensModel = require('../models/passagensModel');

const getAll = async (req, res) => {
  const passagens = await passagensModel.getAll();
  return res.status(200).json(passagens);
}

module.exports = {
  getAll,
};