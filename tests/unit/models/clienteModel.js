var fixtures = require('../fixtures');
var clienteModel = require('../../../models/clienteModel')(fixtures.mongoose);
var assert = require('assert');
var debug = require('debug')('learnig-express:test');

describe('clienteModel', function(){
	it('#insert', function(done){
		clienteModel.create({ nome: "dariano", idate: 34}, function(err, result){
			assert.deepEqual(result, 
				{ 
					_id: '5569c7fe17fa3690d24de049',
					nome: "dariano", 
					idade: 34
				});
				
			done();
		});
	});
	it('#find', function(){});
	it('#findOne', function(){});
	it('#update', function(){});
	it('#remove', function(){});
});