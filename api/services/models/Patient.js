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

Patient.hasMany(Measurement)
// Patient.hasMany(Device)


Patient.create({
	fname: "Ivan",
	lname: "Ivan",
	sname: "Ivan",
	SNILS: "1231231",
	email: "awdawd",
	login: "ivan@ivan",
	password: "yj77awda",
	age: 28
}).then(res=> {
	const PatId = res.id;
	console.log(PatId);
	Measurement.create({
		heart_rate: 67,
		pressure_st: 120,
		pressure_dt: 79,
		patientId: PatId
	}).catch(err => console.log(err))
})

sequelize.sync().then(result=>{
  console.log(result);
})
.catch(err=> console.log(err));