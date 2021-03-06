const sequelize = require("../db");
const Sequelize = require("sequelize");

const Device = sequelize.define("Device", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  protocol: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(20),
    allowNull: false
  }
});


module.exports = Device


