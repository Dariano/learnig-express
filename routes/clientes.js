var express = require('express'),
	router  = express.Router(),
	mongoose   = require('../db/mongoose'),
	ClienteMode = require('../models/clienteModel')(mongoose),
	ClienteController = require('../controllers/clienteController')(ClienteMode);

var pathBase = '/',
    path_id = pathBase + ':_id';

	router
		.all('*', require('../security/auth'))
		.get(pathBase,  ClienteController.getAll.bind(ClienteController))
	  	.get(path_id, ClienteController.getById.bind(ClienteController))	  
	  	.post(pathBase, ClienteController.create.bind(ClienteController))
	  	.put(path_id, ClienteController.update.bind(ClienteController))
	  	.delete(path_id, ClienteController.remove.bind(ClienteController));

module.exports = router;