var app = require('express').createServer();
var express = require('express');


app.configure(function() {
  app.set('views', __dirname + '/views');
  app.use(express.static(__dirname + '/../www'));
});

app.get('/', function(req, res){
  res.send('hello worlds');
});

app.listen(3000);