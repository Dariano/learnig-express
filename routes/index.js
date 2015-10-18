var express = require('express');
var jwt		= require('jwt-simple');
var moment	= require('moment');
var config	= require('config');
var router = express.Router();

router.get('/', function(req, res){
	res.status(201);
	res.json({ 'nome': 'Dariano Soares', 'email': 'darianosoares@hotmail.com'});
});

router.post('/login', function(req, res, next){
	var username = req.body.username;
	var password = req.body.password;
	
	if(username == 'dariano' && password.valueOf() == '123'){
		var expires = moment().add(2, 'days').valueOf();
		var token = jwt.encode({
			user: username,
			exp: expires
		}, config.get('jwtTokenSecret'));
		
		res.json({
			token: token
		});
	} else{
		var err = new Error('Unauthorized');
		err.status = 401;
		
		next(err);
	}
});

// clientes
router.use('/clientes', require('./clientes'));

module.exports = router;