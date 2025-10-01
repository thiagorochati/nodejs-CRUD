const DataTypes  = require("sequelize");
const connection = require("../config/database");

const Usuario = connection.define("Usuario", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "usuarios"
});

Usuario.sync({ force: false })
  .then(() => console.log("Tabela USUARIOS ok"));

module.exports = Usuario;