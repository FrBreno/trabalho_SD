const express = require('express');

const router = express.Router();

router.post('/passagens', (req, res) => {
  return res.json(req.body);
});

router.get('/passagens/:id', (req, res) => {
  return res.json({ id: req.params.id });
});

router.put('/passagens/:id', (req, res) => {
  return res.json({ id: req.params.id });
});

router.delete('/passagens/:id', (req, res) => {
  return res.json({ id: req.params.id });
});

router.get('/voo/:id', (req, res) => {
  return res.json({ id: req.params.id });
});

module.exports = router;