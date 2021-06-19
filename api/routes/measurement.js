const router = require('express').Router(),
	usersCtrl = require('../controllers/measurement');

router.route('/get/:id').get(usersCtrl.getMeasurement);

router.route('/create/:id').post(usersCtrl.createMeasurement);


module.exports = router;