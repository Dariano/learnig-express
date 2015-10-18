var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.status(201);
	res.json({ 'nome': 'Dariano Soares', 'email': 'darianosoares@hotmail.com'});
});

// clientes
router.use('/clientes', require('./clientes'));

module.exports = router;