var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.status(201);
	if(req.accepts('text')){
		res.write('nome; email \n');
		res.write('Dariano Soares; darianosoares@hotmail.com \n');
		res.end();
	} else{
		res.json({ 'nome': 'Dariano Soares', 'email': 'darianosoares@hotmail.com'})
	}	
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Exemple app listening at http://%$:%$', host, port);
});