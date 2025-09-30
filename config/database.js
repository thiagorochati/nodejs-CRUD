const Sequelize = require("sequelize");

const connection = new Sequelize("escola", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = connection;