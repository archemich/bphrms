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
  comment_patients: {
    type: Sequelize.STRING(500),
    allowNull: true
  },
  comment_doctor: {
    type: Sequelize.STRING(500),
    allowNull: true
  }
});



sequelize.sync().then(result=>{
  console.log();
})
.catch(err=> console.log());


module.exports = Measurement