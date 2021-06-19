const router = require('express').Router(),
	authCtrl = require('../controllers/auth');

router.route('/login').post(authCtrl.loginByLogin);
router.route('/loginbyesia').post(authCtrl.loginByEsia);

router.route('/register').post(authCtrl.register);

module.exports = router;
