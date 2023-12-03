const voosModel = require('../models/voosModel');

const getAll = async (_, res) => {
  const voos = await voosModel.getAll();
  return res.status(200).json(voos);
}

const getByID = async (req, res) => {
  const { id } = req.params;
  const voo = await voosModel.getByID(id);
  if (voo.length === 0) {
    return res.status(404).json({ error: 'Voo não encontrado!' });
  }
  return res.status(200).json(voo);
}

module.exports = {
  getByID,
  getAll,
};