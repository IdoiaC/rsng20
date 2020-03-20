var express = require('express');
var app = express();

// ports setup
//var server_port = process.env.OPENSHIFT_NODEJS_PORT || 1234;
//var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// IMPORTANTE: he leído que estas variables ya están obsoletas y Openshift ya no las usa
// cambiar a ip y puerto en los que sí pueda escuchar la app

var server_port = 8080 || 1234;
var server_ip_address = '10.129.4.181' || '127.0.0.1';

app.get('/', function(req,res) {

	res.end('Hello World!');
});

// server listens in on port
app.listen(server_port, server_ip_address, function() {
	console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});
