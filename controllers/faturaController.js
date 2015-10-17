function FaturaController(FaturaModel) {
	
	this.model = FaturaModel;
	
	this.getAll = function(request, response, next){
		this.model.find({}, function(err, data){
			if(err) {
				return next(err);
			}
			
			response.json(data);
		});
	};
	
	this.getById= function(request, response, next){
		var _id = request.params._id;
		
		this.model.findOne(_id, function(err, data){
			if(err) {
				return next(err);
			}
			
			response.json(data);
		});
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

module.exports = function(FaturaModel){
	return new FaturaController(FaturaModel);
};