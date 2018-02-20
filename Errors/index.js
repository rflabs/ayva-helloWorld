var InactiveIntentHandler = function(Context){
    Context.assistant.say("Sorry, that intent is not active now").finish()
}


module.exports = {
    "InactiveIntentError": InactiveIntentHandler
}

