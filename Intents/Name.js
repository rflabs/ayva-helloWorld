
// Ayva State manager
var Ayva = require('ayva')
var StateManager = Ayva.StateManager

var Name = function(Context){
    let name = Context.args.name
    StateManager.setState('nameSet', Context)
    Context.assistant.say("Hello " + name).finish()
}

module.exports = Name;