var express = require('express');
var jwt		= require('jwt-simple');
var moment	= require('moment');
var config	= require('config');
var router = express.Router();

// defaut
router.get('/', function(req, res){
	res.status(201);
	res.json({ 'nome': 'Dariano Soares', 'email': 'darianosoares@hotmail.com'});
});

// login
router.use('/login', require('./login'));

// clientes
router.use('/clientes', require('./clientes'));

module.exports = router;