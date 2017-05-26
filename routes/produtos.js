var express = require('express');
var Produto = require('../model/Produto');

var router = express.Router(); // Criando um 'roteador'

// GET / - Retorna todas as produtos
router.get('/', function(req, res, next) {
  Produto.find().exec(function(err, produtos) {
    if (err) {
        next(err);
    } else {
        res.json(produtos);
    }
  });
});

// POST / - Inclui uma nova produto
router.post('/', function(req, res, next) {
  new Produto(req.body).save(function(err, produto) {
    if (err) {
        next(err);
    } else {
        res.json(produto);
    }
  });
});

module.exports = router; // Exporta o 'router' devidamente configurado