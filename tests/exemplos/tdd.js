var assert = require('assert');
var util = require('./util');

suite('test TDD', function(){
	suiteSetup(function(){
		// Executa todos os testes ANTES desse bloco.
	});
	
	suiteTeardown(function(){
		// Executa todos os testes DEPOIS desse bloco.
	});
	
	setup(function(){
		// Executa cada teste ANTES desse bloco.
	});
	
	teardown(function(){
		// Executa cada teste DEPOIS desse bloco.
	});
	
	test('deve somar o array [2,0]', function(){
		var soma = util.somaArray([2,0]);
		
		assert.equal(soma, 2);
	});
	
	test('deve somar o array [2,3]', function(){		
		var soma = util.somaArray([2,3]);
		
		assert.equal(soma, 5);
	});
	
	test('deve somar o array [2,3,5,8,0]', function(){		
		var soma = util.somaArray([2,3,5,8,0]);
		
		assert.equal(soma, 18);
	});
	
	test('deve somar o array [2,3,5,8,undefined]', function(){		
		var soma = util.somaArray([2,3,5,8,undefined]);
		
		assert.equal(soma, 18);
	});
	
	// casos de testes
});