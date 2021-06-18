const router = require('express').Router();

router.route('/').get((req, res) => {
	res.json({ status: 'OK' });
});

module.exports = router;
