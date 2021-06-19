const sequelize = require("../db");
const Sequelize = require("sequelize");
const Measurement = require("../models/Measurement")
const Device = require("../models/Device")

const Patient = sequelize.define("Patient", {
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
  SNILS: {
    type: Sequelize.STRING(11),
    allowNull: false,
     unique: true
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
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

sequelize.sync().then(result=>{
  console.log(result);
})
.catch(err=> console.log(err));

Patient.hasMany(Measurement);
Patient.hasMany(Device);

sequelize.sync().then(result=>{
  console.log(result);
})
.catch(err=> console.log(err));

module.exports = Patient;