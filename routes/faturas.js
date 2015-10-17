var express = require('express');
var router = express.Router();

var FaturaController = require('../controllers/faturaController')

router.get('/', FaturaController.getAll);

router.get('/:_id', FaturaController.getById);

router.post('/', FaturaController.create);

router.put('/:_id', FaturaController.update);

router.delete('/:_id', FaturaController.remove);

module.exports = router;