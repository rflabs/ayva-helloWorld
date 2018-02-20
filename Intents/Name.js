
// Ayva State manager
var Ayva = require('ayva')
var StateManager = Ayva.StateManager

var Name = function(Context){
    let name = Context.args.name
    StateManager.setState('bornDisabled', Context)
    Context.assistant.say("Hello " + name + ". I can remember your name using my speech model file. My states file helps track what commands are currently active. Try asking me where I was born.").finish()
}

module.exports = Name;