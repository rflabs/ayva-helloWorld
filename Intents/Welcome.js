
// Ayva State manager
var Ayva = require('../../ayva')
var StateManager = Ayva.StateManager

var Welcome = function(Context){
    StateManager.setState('newUser', Context)
    Context.assistant.say("Welcome. What is your name?").finish()
}

module.exports = Welcome;