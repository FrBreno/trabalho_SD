const express = require('express');
const passagensController = require('./controllers/passagensController');
const bodyMiddleware = require('./middlewares/bodyMiddleware');

const router = express.Router();

router.post('/passagens', bodyMiddleware.validateTicket, passagensController.createPassage);

router.get('/passagens', passagensController.getAll);

router.get('/passagens/:id', passagensController.getByID);

router.put('/passagens/:id', bodyMiddleware.validateTicket, passagensController.updatePass);

router.delete('/passagens/:id', passagensController.deletePass);

router.get('/voos', (req, res) => {
  return res.json({ id: req.params.id });
});

router.get('/voos/:id', (req, res) => {
  return res.json({ id: req.params.id });
});

module.exports = router;