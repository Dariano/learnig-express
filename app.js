var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(function(request, response, next){
	if(request.url == '/favicon.ico'){
		response.writeHead(200, { 'Content-Type' : 'image/x-icon'});
		response.end('');
	}
	else{
		next();
	}
});

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

app.use(function(request, response, next){
	var erro = new Error('Not Found');
	erro.status = 404;
	
	next(erro);
});

app.use(function(err, request, response, next){
	console.log(err.stack);
	response.status(err.status || 500).join({ erro: err.message });	
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Exemple app listening at http://%$:%$', host, port);
});