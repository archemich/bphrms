const { verifyJWT } = require('../services/jwt');
const jwt = require('../services/jwt'),
      bcrypt = require('bcrypt'),
      PatientModel = require('../services/models/Patient');
      DoctorModel = require('../services/models/Doctor');
      

module.exports = {
    async loginByLogin({body: {login, password, role}}, res) 
    {
        ////// User Validation //////
        // Looking for user
        let user = null;
        if (role == 'doctor') {
            user = await DoctorModel.findOne({where: {login: login}});
        }
        else if (role == 'patient') {
            user = await PatientModel.findOne({where: {login: login}});
        }
        if (!user) {
            res.status(401).json({ error: { message: 'User not registered' } });
			return;
        }

        // Password compare
        user = user.dataValues;
        if (!password || !bcrypt.compareSync(password, user.password)) {
            res.status(401).json({ error: { message: 'Wrong login or password' } });
			return;
        }

        ////// Access Granted //////
        res.status(200).json({
            status: 'OK',
            token: jwt.generateJWT({user: login, role: role}),
            user: {...user, password: undefined},
        });
    },


    async loginByEsia(req, res) {
        /////////////// PASS ///////////////
    },

    async verifyToken(req, res, next) 
    {
		
        if (!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer') {
			res.status(401).json({ error: { message: 'InvalidToken', messageCode: 0, type: 'Unauthorized', code: 401 } });
			return;
		}

		req.user = req.headers.authorization.split(' ')[1];

		if (!jwt.verifyJWT(req.user)) {
			res.status(401).json({ error: { message: 'InvalidToken', messageCode: 0, type: 'Unauthorized', code: 401 } });
			return;
		}

		req.user = jwt.decodeJWT(req.user);
		next();
	},

    async registerByLogin({body: { password }}, res) 
    {
		res.json({ crypt: bcrypt.hashSync(password, bcrypt.genSaltSync()) });
    }
}