var express        	= require('express');
var methodOverride 	= require('method-override');
var bodyParser     	= require('body-parser');
var cors 		   	= require('cors');
var app 			= express();

// server config
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

// router
app.use('/', require('./routes'));

// error handling
app.use(function(request, response, next){
	var erro = new Error('Not Found');
	erro.status = 404;
	
	next(erro);
});

app.use(function(err, request, response, next){
	response.status(err.status || 500).join({ erro: err.message });	
});

// server listener
module.exports = app;