const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tougths", "root", "MySQL_2002", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso!");
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
