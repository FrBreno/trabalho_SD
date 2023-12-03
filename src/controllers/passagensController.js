const passagensModel = require('../models/passagensModel');
const voosModel = require('../models/voosModel');

const getAll = async (_, res) => {
  const passagens = await passagensModel.getAll();
  return res.status(200).json(passagens);
}

const getByID = async (req, res) => {
  const { id } = req.params;
  const passage = await passagensModel.getByID(id);
  if (passage.length === 0) {
    return res.status(404).json({ error: 'Passagem não encontrada!' });
  }
  return res.status(200).json(passage);
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

const updatePass = async (req, res) => {
  const { id } = req.params;
  const passage = req.body;

  const voo = await voosModel.getByID(passage.idVoo);
  if (voo.length === 0) {
    return res.status(400).json({ error: 'Voo não encontrado!' });
  }
  const passageExists = await passagensModel.getByID(id);
  if (passageExists.length === 0) {
    return res.status(404).json({ error: 'Passagem não encontrada!' });
  }

  await passagensModel.updatePass(passage, id);
  return res.status(200).json({ message: 'Passagem atualizada com sucesso!' });
}

const deletePass = async (req, res) => {
  const { id } = req.params;
  const passageExists = await passagensModel.getByID(id);
  if (passageExists.length === 0) {
    return res.status(404).json({ error: 'Passagem não encontrada!' });
  }
  await passagensModel.deletePass(id);
  return res.status(200).json({ message: 'Passagem deletada com sucesso!' });
}

const transferPass = async (req, res) => {
  const { id } = req.params;
  const { nome, bagagem } = req.body;

  const passageExists = await passagensModel.getByID(id);
  if (passageExists.length === 0) {
    return res.status(404).json({ error: 'Passagem não encontrada!' });
  }
  const passage = {
    ...passageExists[0],
    nome,
    bagagem
  };
  await passagensModel.updatePass(passage, id);
  return res.status(200).json({ message: 'Passagem transferida com sucesso!' });
}

module.exports = {
  getAll,
  getByID,
  createPassage,
  updatePass,
  deletePass,
  transferPass
};