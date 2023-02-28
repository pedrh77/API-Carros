const express = require("express");
const router = express.Router();

const CarroController = require("./Controllers/CarroController.js");

router.get('/carros', CarroController.ListaTodosCarros);                // Busca Carros
router.get('/carro/:codigo', CarroController.ListaCarroPorId);          // Busca Carro Por Codigo
router.post('/carro', CarroController.InserirCarro);                    //Adiciona Novo Carro
router.put('/carro/:codigo', CarroController.AtualizarCarroPorId);      //Atualiza Dados Carro
router.delete('/carro/:codigo', CarroController.ExcluiCarroPorId);      // Exclui Carro Por Codigo

module.exports = router;