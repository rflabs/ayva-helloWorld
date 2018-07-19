var StateManager = require('../DataStores/StateDataStore')

var EnableBorn = function(Context){
    StateManager.setState('bornEnabled', Context)
    Context.assistant.say("Command enabled. You can go ahead and ask me again where I was born.").finish()
}

module.exports = EnableBorn;