const sequelize = require("../db");
const Sequelize = require("sequelize");

const Measurement = sequelize.define("Measurement", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  heart_rate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pressure_st: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pressure_dt: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  timestamp: {
    type: Sequelize.DATE,
    allowNull: false
  },
  comment_patient: {
    type: Sequelize.STRING(500),
    allowNull: true
  },
  comment_doctor: {
    type: Sequelize.STRING(500),
    allowNull: true
  }
});

module.exports = Measurement