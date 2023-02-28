const db = require("../db");
module.exports = {
  ListaTodosCarros: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM carros", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
  ListaCarroPorId: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM carros where codigo = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results);
          } else {
            aceito(results);
          }
        }
      );
    });
  },
  InserirCarro: (modelo, placa) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "Insert into carros (modelo, placa) values (?, ?)",
        [modelo, placa],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          console.log(results.insertCodigo);
          aceito(results.insertCodigo);
        }
      );
    });
  },
  AtualizarCarro: (codigo, modelo, placa) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "Update carros set modelo = ? , placa = ? where codigo = ?",
        [modelo, placa, codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          console.log(results);
          aceito(results);
        }
      );
    });
  },
  ExcluiCarroPorId: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "delete from carros where codigo = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          console.log(results);
          aceito(results);
        }
      );
    });
  },
};
