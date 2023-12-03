const express = require('express');
const voosController = require('./controllers/voosController');
const passagensController = require('./controllers/passagensController');
const bodyMiddleware = require('./middlewares/bodyMiddleware');

const router = express.Router();

router.post('/passagens', bodyMiddleware.validateTicket, passagensController.createPassage);

router.get('/passagens', passagensController.getAll);

router.get('/passagens/:id', passagensController.getByID);

router.put('/passagens/:id', bodyMiddleware.validateTicket, passagensController.updatePass);

router.delete('/passagens/:id', passagensController.deletePass);

router.get('/voos', voosController.getAll);

router.get('/voos/:id', voosController.getByID);

module.exports = router;