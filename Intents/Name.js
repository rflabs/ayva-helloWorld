
// Ayva State manager
var Ayva = require(process.env.LOCAL_AYVA || 'ayva')
var StateManager = Ayva.StateManager

var Name = function(Context){
    let name = Context.args.firstName
    StateManager.setState('bornDisabled', Context)
    Context.assistant.say(`Hello ${name}! Congratulations on completing the tutorial, you are now ready to begin building using the Ayva Framework!`).finish()
}

module.exports = Name;