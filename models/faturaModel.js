function FaturaModel(mongo) {
	this.mongo = mongo;
 };

FaturaModel.prototype.find = function(query, callback) {
	this.mongo.collection('faturas').find(query, callback);
};

FaturaModel.prototype.findOne = function(_id, callback) {
	var query = { _id: this.mongo.ObjectId(_id)};
	this.mongo.collection('faturas').findOne(query, callback);
};

FaturaModel.prototype.create = function(data, callback) {
	this.mongo.collection('faturas').insert(data, callback);
};

FaturaModel.prototype.update = function(_id, data, callback) {
	var query = { _id: this.mongo.ObjectId(_id)};
	this.mongo.collection('faturas').update(query, data, callback);
};

FaturaModel.prototype.remove = function(_id, callback) {
	var query = { _id: this.mongo.ObjectId(_id)};
	this.mongo.collection('faturas').remove(query, callback);
};

module.exports = function (mongo){
	return new FaturaModel(mongo);
};