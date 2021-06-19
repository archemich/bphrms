require("./models/Device");
require("./models/Measurement");
require("./models/Patient");
require("./models/Doctor");
require("./models/DoctorPatient");
require('./db').sync()
.then(result => console.log('Model emigration OK!!!!!!!'))
.catch (error => console.log(error));