const passagensModel = require('../models/passagensModel');
const voosModel = require('../models/voosModel');

const getAll = async (req, res) => {
  const passagens = await passagensModel.getAll();
  return res.status(200).json(passagens);
}

const createPassage = async (req, res) => {
  const passage = req.body;

  const voo = await voosModel.getByID(passage.idVoo);
  if (voo.length === 0) {
    return res.status(400).json({ error: 'Voo não encontrado!' });
  }
  const newPassage = await passagensModel.createPassage(passage);
  return res.status(201).json(newPassage);
}

module.exports = {
  getAll,
  createPassage,
};