var StateManager = require('../DataStores/StateDataStore')

var Name = function(Context){
    let name = Context.args.firstName
    StateManager.setState('bornDisabled', Context)
    Context.assistant.say("Hello " + name + ". I can remember your name from your input, and store it to use it later if you need. My states file helps track what commands are currently active. Try asking me where I was born.").finish()
}

module.exports = Name;