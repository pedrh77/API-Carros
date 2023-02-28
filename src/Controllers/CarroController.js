const CarroServices = require("../Sevices/CarroServices.js");
const carroServices = require("../Sevices/CarroServices.js");

module.exports = {
  ListaTodosCarros: async (req, res) => {
    let json = { error: "", result: [] };
    let carros = await carroServices.ListaTodosCarros();
    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo,
      });
    }
    res.json(json);
  },

  ListaCarroPorId: async (req, res) => {
    let json = { error: "", result: {} };
    let codigo = req.params.codigo;

    let carro = await carroServices.ListaCarroPorId(codigo);
    if (carro) {
      json.result = carro;
    }
    res.json(json);
  },

  InserirCarro: async (req, res) => {
    let json = { erro: "", result: {} };

    let modelo = req.body.modelo;
    let placa = req.body.placa;

    console.log("aqui");
    if (modelo && placa) {
      let carroCodigo = await CarroServices.InserirCarro(modelo, placa);
      json.result = {
        codigo: carroCodigo,
        modelo,
        placa,
      };
    } else {
      json.error = "Campos não Enviados";
    }
    res.json(json);
  },

  AtualizarCarroPorId: async (req, res) => {
    let json = { erro: "", result: {} };

    let codigo = req.params.codigo;
    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (modelo && placa && codigo) {
      let carro = await CarroServices.AtualizarCarro(codigo, modelo, placa);
      json.result = {
        codigo,
        modelo,
        placa,
      };
    } else json.error = "Campos não Enviados";
    res.json(json);
  },
  ExcluiCarroPorId: async (req, res) => {
    let json = { erro: "", result: {} };
    let codigo = req.params.codigo;
    if (codigo) {
      let carro = await CarroServices.ExcluiCarroPorId(codigo);
      json.result = "Carro Excluido";
    } else json.error = "Codigo Vazio";
    res.json(json);
  },
};
