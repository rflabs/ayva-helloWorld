
// Ayva State manager
var Ayva = require('../../ayva')
var StateManager = Ayva.StateManager

var Age = function(Context){
    StateManager.setState('bornEnabled', Context)
    Context.assistant.say("Born command enabled. Please try asking me where I was born again.").finish()
}

module.exports = Age;