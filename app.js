var express = require('express');
var app = express();
var bodyParse =require('body-parser');
var methodOverride =require("method-override");
var mongoose = require('mongoose');
var db = require('./config/db');
var port = 8080;

mongoose.connect(db.url);

app.use(bodyParse.json());

app.use(bodyParse.json({type: 'application/vnd.api+json'}));

app.use(bodyParse.urlencoded({ extended: true}));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

server = app.listen(port);

console.log(" Started server on" + port);

exports = module.exports = app;

exports.closeServer = function(){
    server.close();
};
