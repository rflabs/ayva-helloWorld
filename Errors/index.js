// Ayva State manager
var Ayva = require('ayva')
var StateManager = Ayva.StateManager

var InactiveIntentHandler = function(Context){
    StateManager.getState(Context).then(function(state) {
        if (state === 'bornDisabled') {
            Context.assistant.say("This command is currently disabled. You can enable this command by saying enable the intent. Try this now.").finish()
        } else {
            Context.assistant.say("This command is currently not available.").finish()
        }
    })
    
}


module.exports = {
    "InactiveIntentError": InactiveIntentHandler,
}

