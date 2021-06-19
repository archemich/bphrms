const origins = [];

module.exports = require('cors')({
	origin(or, cb) {
		if (origins.indexOf(or) !== -1 || !or) cb(null, true);
		else cb(new Error('Not allowed by CORS'));
	},
});
