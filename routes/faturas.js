var express = require('express'),
	router  = express.Router(),
	mongo   = require('../db/mongo'),
	FaturaMode = require('../models/faturaModel')(mongo),
	FaturaController = require('../controllers/faturaController')(FaturaMode);

router.get('/', FaturaController.getAll.bind(FaturaController));

router.get('/:_id', FaturaController.getById.bind(FaturaController));

router.post('/', FaturaController.create.bind(FaturaController));

router.put('/:_id', FaturaController.update.bind(FaturaController));

router.delete('/:_id', FaturaController.remove.bind(FaturaController));

module.exports = router;