
// Ayva State manager
var Ayva = require(process.env.LOCAL_AYVA || 'ayva')
var StateManager = Ayva.StateManager

var Born = function(Context){
    Context.assistant.say("I was born in Boston, where my creators orginally met. This concludes the tutorial but please review my documentation and open-source code on Github").finish({exit:true})
}

module.exports = Born;