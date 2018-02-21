
// Ayva State manager
var Ayva = require(process.env.LOCAL_AYVA || 'ayva')
var StateManager = Ayva.StateManager

var EnableBorn = function(Context){
    StateManager.setState('bornEnabled', Context)
    Context.assistant.say("Command enabled. Please try asking me again where I was born.").finish()
}

module.exports = EnableBorn;