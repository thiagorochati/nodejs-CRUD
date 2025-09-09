const DataTypes  = require("sequelize");
const connection = require("../config/database");

const Cliente = connection.define("Cliente", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "clientes"
});

Cliente.sync({ force: false })
  .then(() => console.log("Tabela CLIENTES ok"));

module.exports = Cliente;