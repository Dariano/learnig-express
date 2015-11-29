var mongoose = require('mongoose');
var config = require('config');
var debug = require('debug')('learnig-express:db');

'use strict';

function _connection() {
	var username = config.get('mongo.username'),
		password = config.get('mongo.password'),
		server = config.get('mongo.server'),
		port = config.get('mongo.port'),
		database = config.get('mongo.database'),
		auth = username ? username + ':' + password + '@' : '';

	return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

mongoose.connect(_connection());

var db = mongoose.connection;
db.on('error', function(err) {
	debug(err);
});

db.once('open', function(callback) {
	debug('connected to mongodb');
});

module.exports = mongoose;