var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var IntentMap = require('./Intents')
var States = require('./states')
var Ayva = require('../ayva')

var StateDataStore = require('./DataStores/StateDataStore')

//Ayva Config
Ayva.Config.RegisterIntents(IntentMap);
Ayva.Config.RegisterStates(States);
Ayva.Config.StateProvider(StateDataStore);

app.post('/gAssistant', function(req, res) {
    Ayva.ExecuteRequest.FromGoogle(req.body, res);    
})

server.listen(process.env.PORT || 8080, function() {
	console.log("Node server started")
});