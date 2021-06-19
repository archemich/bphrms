require("./models/Device");
require("./models/Measurement");
require("./models/Patient");
async ()=> await require('./db').sync();