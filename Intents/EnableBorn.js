
// Ayva State manager
var Ayva = require('../../ayva')
var StateManager = Ayva.StateManager

var Age = function(Context){
    StateManager.setState('bornEnabled', Context)
    Context.assistant.say("Command enabled. Please try asking me again where I was born.").finish()
}

module.exports = Age;