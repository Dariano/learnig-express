var express = require('express'),
	router  = express.Router(),
	mongoose   = require('../db/mongoose'),
	ClienteMode = require('../models/clienteModel')(mongoose),
	ClienteController = require('../controllers/clienteController')(ClienteMode);

var passport = require('passport');

router.get('/', passport.authenticate('basic', { session: false}), ClienteController.getAll.bind(ClienteController));

router.get('/:_id', ClienteController.getById.bind(ClienteController));

router.post('/', ClienteController.create.bind(ClienteController));

router.put('/:_id', ClienteController.update.bind(ClienteController));

router.delete('/:_id', ClienteController.remove.bind(ClienteController));

module.exports = router;