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
	},
	async createMeasurement(req, res){
		let patientId = req.params['id'];
		let mesurementBody = req.body;
		let measurement = await Measurement.create({
			PatientId: patientId,
			heart_rate: mesurementBody['hr'],
			pressure_st: mesurementBody['pst'],
			pressure_dt: mesurementBody['pdt'],
			timestamp: Date.now()
		});
		res.status(200).json({status: "OK"});
	}
}