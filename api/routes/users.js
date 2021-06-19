const router = require('express').Router(),
	usersCtrl = require('../controllers/users');

router.route('/patients/:id').get(usersCtrl.getPatient);

router.route('/patients').get(usersCtrl.getAllPatients);

router.route('/patietnsForDoctor/:id').get(usersCtrl.getPatiensForDoctor);

module.exports = router;
