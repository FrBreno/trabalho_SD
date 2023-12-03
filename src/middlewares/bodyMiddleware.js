const validateTicket = (req, res, next) => {
  const { idVoo, nome, preco, bagagem, primeiraClasse, servicoLuxo } = req.body;
  if (!idVoo || !nome || !preco || !bagagem || primeiraClasse === undefined || servicoLuxo === undefined) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
  }
  if (!primeiraClasse && servicoLuxo) {
    return res.status(400).json({ error: 'Não é possível ter serviço de luxo sem primeira classe!' });
  }
  return next();
};

const validateTransfer = (req, res, next) => {
  const { nome, bagagem } = req.body;
  if (!nome || !bagagem) {
    return res.status(400).json({ error: 'Informe o nome e a bagagem do novo passageiro!' });
  }
  return next();
}

module.exports = {
  validateTicket,
  validateTransfer
};