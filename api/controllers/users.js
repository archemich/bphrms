const Patient = require("../services/models/Patient");
const PatientModel = require("../services/models/Patient"),
	DoctorModel =require("../services/models/Doctor"),
	DoctorPatientModel = require("../services/models/DoctorPatient");

module.exports = {
	async getPatient({params}, res) {
		let patietId = params['id'];
		let patient = await PatientModel.findOne({where: {id: patietId}});
		if (!patient){
			res.status(404).json("No patient");
			return;
		}
		patient['password'] = undefined;
		res.json({patient});
	},

	async getAllPatients(req, res) {
		let patient = await PatientModel.findAll({raw:true})
		if (!patient) {
			res.status(404);
			return;
		}
		patient.forEach(element => {
			element['password'] = undefined;
		});
		res.json({patient});
	},

	async getPatiensForDoctor({params}, res) {
		let patientsId = await DoctorPatientModel.findAll({DoctorId:params['id']});
		let patients = await Patient.findAll({id:patientsId});
		if(!patients){
			res.status(404).json("No patients");
			return;
		}
		patients.forEach(element => {
			element['password'] = undefined;
		});
		res.json({patients});
	}
}


