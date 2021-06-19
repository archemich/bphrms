const Measurement = require("../services/models/Measurement");
const { Op } = require("sequelize");

module.exports = {
	async getMeasurement(req, res){
		let patientId = req.query['id'];
		let countRows = req.query['rows'];
		// let DtStart = Date.parse(req.query['timeStart']);
		// let DtEnd = Date.parse(req.query['timeEnd']);
		// console.log(Date.now());
		// console.log(DtStart);
		let measurement = await Measurement.findAll({where: {
			PatientId:patientId,
			// timestamp: {
			// 	[Op.between]: DtStart, DtEnd
			// }
			},
			limit: countRows == undefined ? 15 : parseInt(countRows),			  
		});
		if(!measurement){
			res.status(404).json("No measurement");
			return ;
		}
		res.json({measurement});
	},
	async createMeasurement(req, res){
		let patientId = req.query['id'];
		let mesurementBody = req.body;
		console.log(mesurementBody);
		let measurement = await Measurement.create({
			PatientId: patientId,
			heart_rate: mesurementBody['heart_rate'],
			pressure_st: mesurementBody['pressure_st'],
			pressure_dt: mesurementBody['pressure_dt'],
			timestamp: Date.now(),
			comment_patient: mesurementBody['comment_patient'],
			comment_doctor: mesurementBody['comment_doctor']
		});
		if(!measurement){
			res.status(404).json("Don't work");
		}
		res.status(200).json({status: "OK", create: measurement});
	}, 
	async updateMeasurement(req, res) {
		let measurementId = req.params['id'];
		let measurementBody = req.body;
		let measure = await Measurement.findByPk(measurementId);

		let measurement = await Measurement.update({
			heart_rate: measurementBody['heart_rate'] == undefined ? measure['heart_rate'] : measurementBody['heart_rate'],
			pressure_st: measurementBody['pressure_st'] == undefined ? measure['pressure_st'] : measurementBody['pressure_st'],
			pressure_dt: measurementBody['pressure_dt'] == undefined ? measure['pressure_dt'] : measurementBody['pressure_dt'],
			comment_patient: measurementBody['comment_patient'] == undefined ? measure['comment_patient'] : measurementBody['comment_patient'],
			comment_doctor: measurementBody['comment_doctor'] == undefined ? measure['comment_doctor'] : measurementBody['comment_doctor']
		}, {where: {
			id:measurementId
		}});
		if(!measurement){
			res.status(404).json("Don't work");
		}
		res.status(200).json({status: "OK", update: measurement[0], m:measure});
	},
	async getMeasurementPropery(req, res){
		switch(req.query['property']){
			case "max": {

			}
			case "min": {
				
			}
		}
	}
}