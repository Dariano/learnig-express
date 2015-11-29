var debug = require('debug')('learnig-express:fixtures');
var assert = require('assert');

function _model() {
	this.save = function(callback) {
		callback(null, {
			_id: "5569c7fe17fa3690d24de049",
			nome: "dariano",
			idade: 34
		});
	};
}

var fixtures = {
	mongoose: {
		model: function(name, obj) {
			return _model;
		}
	},
	next: function(err) {
		debug('catch err', err);
		assert.deepEqual(err, {});
	}
};

module.exports = fixtures;