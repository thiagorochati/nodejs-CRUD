const Sequelize = require("sequelize");
const connection = require("./database");

const Cliente = connection.define('cliente', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },    
});

Cliente.sync({force: false})
  .then(() => {
    console.log("Tabela de CLIENTE criada com sucesso!")
  })