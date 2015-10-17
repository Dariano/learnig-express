function FaturaController() {
	
	this.getAll = function(request, response, next){
		response.send('retorna todas as faturas.');
	};
	
	this.getById= function(request, response, next){
		response.send('retorna uma fatura.');
	};
	
	this.create = function(request, response, next){
		response.send('cria uma fatura.');
	};
	
	this.update = function(request, response, next){
		response.send('atualiza uma fatura.');
	};
	
	this.remove = function(request, response, next){
		response.send('remove uma fatura.');
	};
};

module.exports = new FaturaController();