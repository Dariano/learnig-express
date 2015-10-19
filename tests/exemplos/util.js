var somaArray = function(arr){
	return arr.reduce(function(prev, curr){
		return prev + (isNaN(curr) ? 0 : curr);
	});
};

module.exports = {
	somaArray: somaArray 
};