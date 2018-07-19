var StateManager = require('../DataStores/StateDataStore')

var InactiveIntentErrorHandler = function(Context){
    StateManager.getState(Context).then(function(state) {
        console.log("Intent matched: " + Context.intentName)
        if(state != "bornEnabled" && Context.intentName == "Born")
        {
            Context.assistant.say("This is an example of an inactive intent. I can keep track of our conversation and respond differently based on what we've already discussed. Try saying 'enable' or 'activate'")
        } else {
            Context.assistant.say("This command is currently not available.")
        }
       Context.assistant.finish()
    })
    
}

module.exports = {
    "InactiveIntentError": InactiveIntentErrorHandler,
}