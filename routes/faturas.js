var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('retorna todas as faturas.')
});

module.exports = router;