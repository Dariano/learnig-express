var express = require('express'),
	router  = express.Router(),
	mongoose   = require('../db/mongoose'),
	FaturaMode = require('../models/faturaModel')(mongoose),
	FaturaController = require('../controllers/faturaController')(FaturaMode);

router.get('/', FaturaController.getAll.bind(FaturaController));

router.get('/:_id', FaturaController.getById.bind(FaturaController));

router.post('/', FaturaController.create.bind(FaturaController));

router.put('/:_id', FaturaController.update.bind(FaturaController));

router.delete('/:_id', FaturaController.remove.bind(FaturaController));

module.exports = router;