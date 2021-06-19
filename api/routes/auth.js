const router = require('express').Router(),
	authCtrl = require('../controllers/auth');

router.route('/login').post(authCtrl.loginByLogin);
router.route('/loginbyesia').post(authCtrl.loginByEsia);

// For Admin purpose (Not secured)
router.route('/register').post(authCtrl.registerByLogin);

module.exports = router;
