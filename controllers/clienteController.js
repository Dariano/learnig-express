var debug = require('debug')('learnig-express:controller'),
	Promise = require('bluebird');

function ClienteController(ClienteModel) {
	
	this.model = Promise.promisifyAll(ClienteModel);
	
	this.getAll = function(request, response, next){
		this.model.findAsync({})
			.then(function(data){
				response.json(data);
			})
		.catch(next)
	};
	
	this.getById = function(request, response, next){
		var _id = request.params._id;
		
		this.model.findOneAsync(_id)
			.then(handleNotFound)
			.then(function(data){
					response.json(data);
				})
			.catch(next);
	};
	
	var handleNotFound = function(data){
		if(!data){
			var err = new Error('Not Found');
			err.status = 404;
			throw err;
		}
		
		return data;
	};
	
	this.create = function(request, response, next){
		var body = request.body;
		
		this.model.create(body, function(err, data){
			if(err) {
				return next(err);
			}
			
			response.json(data);
		});
	};
	
	this.update = function(request, response, next){
		var _id = request.params._id;
		var body = request.body;
		
		this.model.update(_id, body, function(err, data){
			if(err) {
				return next(err);
			}
			
			response.json(data);
		});
	};
	
	this.remove = function(request, response, next){
		var _id = request.params._id;
		
		this.model.remove(_id, function(err, data){
			if(err) {
				return next(err);
			}
			
			response.json(data);
		});
	};
};

module.exports = function(ClienteModel){
	return new ClienteController(ClienteModel);
};