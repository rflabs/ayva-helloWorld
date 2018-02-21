
// Welcome Intent
var Welcome = {
    name: 'Welcome',
    utterances: [],
    events:[
        "Welcome"
    ],
    isList: false
}

// Name Intent
var Name = {
    name: 'Name',
    utterances: [
        "My name is {'firstName':'Kevin'}",
        "{'firstName':'Gavin'}",
        "I am {'firstName':'Sophie'}"
    ],
    slots: {
        "firstName" : {
            dataType: "@sys.given-name",
            isList: false,
            required: false,
        }
    },
    events:[],
    isList: false
}

// EnableBorn Intent
var EnableBorn = {
    name: 'EnableBorn',
    utterances: [
        "enable where were you born intent",
        "allow me to ask Ayva where she was born",
        "allow me to ask you where you were born",
        "allow where was ayva born intent",
        "enable the born intent",
        "enable born intent",
        "enable the intent",
        "enable intent"
    ],
    events:[],
    isList: false
}

// Born Intent
var Born = {
    name: 'Born',
    utterances: [
        "where were you born",
        "tell me where you were born",
        "where are you from",
        "tell me where you are from"
    ],
    events:[],
    isList: false
}

// Export object to access all defined intents
var speechModel = {
    intents: [
        Welcome,
        Name,
        EnableBorn,
        Born
    ],  
}

module.exports = speechModel;