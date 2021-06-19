const router = require('express').Router(),
	usersCtrl = require('../controllers/measurement');

router.route('/get').get(usersCtrl.getMeasurement);

router.route('/create').post(usersCtrl.createMeasurement);

router.route('/update/:id').put(usersCtrl.updateMeasurement);

module.exports = router;