const sequelize = require("../db");
const Sequelize = require("sequelize");
const Patient = require("../models/Patient")
const Doctor = require("../models/Doctor")


const DoctorPatient = sequelize.define("DoctorPatient", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
});



Patient.belongsToMany(Doctor, {through: DoctorPatient});
Doctor.belongsToMany(Patient, {through: DoctorPatient});



module.exports = DoctorPatient;