'use strict';

function ClienteDAO(model) {
	this.model = model;
}

ClienteDAO.prototype.find = function(query, callback) {
	this.model.find(query).exec(callback);
};

ClienteDAO.prototype.findOne = function(_id, callback) {
	var query = {
		_id: _id
	};
	this.model.find(query).exec(callback);
};

ClienteDAO.prototype.create = function(data, callback) {
	var model = new this.model(data);
	model.save(function(err, result) {
		callback(err, result);
	});
};

ClienteDAO.prototype.update = function(_id, data, callback) {
	var query = {
		_id: _id
	};
	this.model.update(query, data).exec(function(err, result) {
		callback(err, callback);
	});
};

ClienteDAO.prototype.remove = function(_id, callback) {
	console.log('id', _id);
	var query = {
		_id: _id
	};
	this.model.remove(query).exec(function(err, result) {
		callback(err, result);
	});
};

module.exports = function(mongoose) {
	var Cliente = mongoose.model('Cliente', {
		nome: String,
		idade: Number
	});

	return new ClienteDAO(Cliente);
};