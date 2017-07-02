const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientDetailsSchema = new Schema({
	HIN:{
		type:String,
		required:[true, 'HIN feild is required']		
	},
	
	injury:{
		type:String
	},
	
	visit_type :{
		type: String
	},
	
	date :{
		type: Date,
		default: Date.now
	},
	
	DoctorName:{
		type:String
	},
	
	PatientName:{
		type:String
	},
		
	height :{
		type :float
	},

	weight :{
		type :float
	},
	
	BMI : {
		type:float
	},
	
	temperature: {
		type: float
	},
	
	BloodPreasure: {
		type:float
	}
});

const PatientDetails = mongoose.model('patientDetails' , PatientDetailsSchema);

module.exports = PatientDetails;