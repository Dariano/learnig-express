function FaturaController() {};

FaturaController.prototype.getAll = function(request, response, next){
	response.send('retorna todas as faturas.');
};

FaturaController.prototype.getById= function(request, response, next){
	response.send('retorna uma fatura.');
};

FaturaController.prototype.create = function(request, response, next){
	response.send('cria uma fatura.');
};

FaturaController.prototype.update = function(request, response, next){
	response.send('atualiza uma fatura.');
};

FaturaController.prototype.remove = function(request, response, next){
	response.send('remove uma fatura.');
};

module.exports = FaturaController();