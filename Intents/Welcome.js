var StateManager = require('../DataStores/StateDataStore')

var Welcome = function(Context){
    StateManager.setState("welcome", Context)
    Context.assistant.say("Hi, I'm Ayva. I was created to help you quickly build cross-platform voice applications. First, let me show you how I remember things. What is your first name?").finish()
}

module.exports = Welcome;