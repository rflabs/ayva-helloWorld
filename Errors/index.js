var InactiveIntentHandler = function(Context){
    console.log(Context)
    Context.assistant.say("Sorry, that intent is not active now").finish()
}


module.exports = {
    "InactiveIntentError": InactiveIntentHandler,
}

