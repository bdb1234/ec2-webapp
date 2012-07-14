var app = require('express').createServer();
var express = require('express');


app.configure(function() {
  app.set('views', __dirname + '/views');
});

app.get('/', function(req, res){
  res.send('hey shivaaaa');
});

app.listen(80);