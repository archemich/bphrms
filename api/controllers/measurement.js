const Measurement = require("../services/models/Measurement");


module.exports = {
	async getMeasurement({params}, res){
		let patientId = params['id'];
		let measurement = await Measurement.findAll({where: {PatientId:patientId}});

		if(!measurement){
			res.status(404).json("No measurement");
			return ;
		}
		res.json({measurement});
	}
}