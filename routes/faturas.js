var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('retorna todas as faturas.')
});

router.get('/:id', function(req, res){
	res.send('retorna uma fatura.')
});

router.post('/', function(req, res){
	res.send('Cria uma fatura.')
});

router.put('/:id', function(req, res){
	res.send('atualiza a fatura.')
});

router.delete('/:id', function(req, res){
	res.send('remove, ou atualiza a fatura.')
});

module.exports = router;