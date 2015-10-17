'use strict';

function FaturaDAO(model) {
	this.model = model;
 };

FaturaDAO.prototype.find = function(query, callback) {
	this.model.find(query).exec(callback);
};

FaturaDAO.prototype.findOne = function(_id, callback) {
	var query = { _id: _id };
	this.model.find(query).exec(callback);
};

FaturaDAO.prototype.create = function(data, callback) {
	var model = new this.model(data);
	model.save(function(err, result){
		callback(err, result);
	});
};

FaturaDAO.prototype.update = function(_id, data, callback) {
	var query = { _id: _id };
	this.model.update(query, data).exec(function(err, result){
		callback(err, callback);
	});
};

FaturaDAO.prototype.remove = function(_id, callback) {
	var query = { _id: _id };
	this.model.remove(query).exec(function(err, result){
		callback(err, result);
	});
};

module.exports = function (mongoose){
	var Fatura = mongoose.model('Fatura', {
		total: Number
	});
	
	return new FaturaDAO(Fatura);
};