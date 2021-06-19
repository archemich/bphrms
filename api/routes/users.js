const router = require('express').Router(),
	authCtrl = require('../controllers/auth');

router.route('/login').post(authCtrl.loginByLogin);

// For Admin purpose (Not secured)
router.route('/register').post(authCtrl.register);

module.exports = router;
