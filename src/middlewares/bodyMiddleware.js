const validateTicket = (req, res, next) => {
  const { idVoo, nome, preco, bagagem, primeiraClasse, servicoLuxo } = req.body;
  if (!idVoo || !nome || !preco || !bagagem || primeiraClasse === undefined || servicoLuxo === undefined) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
  }
  return next();
};

module.exports = {
  validateTicket,
};