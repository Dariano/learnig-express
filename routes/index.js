var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.status(201);
	res.json({ 'nome': 'Dariano Soares', 'email': 'darianosoares@hotmail.com'});
});

// faturas
router.use('/faturas', require('./faturas'));

module.exports = router;