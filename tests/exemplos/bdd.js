var assert = require('assert');
var util = require('./util');

describe('test BDD', function(){
	before(function(){
		// Executa todos testes ANTES desse bloco.
	});
	
	after(function(){
		// Executa todos testes DEPOIS desse bloco.
	});
	
	beforeEach(function(){
		// Executa cada teste ANTES desse bloco.
	});
	
	afterEach(function(){
		// Executa cada teste DEPOIS desse bloco.
	});
	
	it('deve somar o array [2,5,3]', function(){
		var soma = util.somaArray([2,5,3]);
		
		assert.equal(soma, 10);
	});
	
});