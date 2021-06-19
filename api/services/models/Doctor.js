const sequelize = require("../db");
const Sequelize = require("sequelize");
const Patient = require("../models/Patient")


const Doctor = sequelize.define("Doctor", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  login: {
    type: Sequelize.STRING(100),
    allowNull: false,
     unique: true
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  fname: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  lname: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  sname: {
    type: Sequelize.STRING(100),
    allowNull: true
  }
});




sequelize.sync().then(result=>{
  console.log(result);
})
.catch(err=> console.log(err));

module.exports = Doctor;