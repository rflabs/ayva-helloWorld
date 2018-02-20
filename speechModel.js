
// Welcome Intent
var Welcome = {
    name: 'welcome',
    utterances: [],
    events:[
        "Welcome"
    ],
    slots: {},
    isList: false
}

// Name Intent
var Name = {
    name: 'name',
    utterances: [
        "My name is {'name':'Kevin'}",
        "{'name':'Gavin'}",
        "I am {'name':'Sophie'}"
    ],
    slots: {
        "name" : {
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
    name: 'enableBorn',
    utterances: [
        "enable where were you born intent",
        "allow me to ask Ayva where she was born",
        "allow me to ask you where you were born",
        "allow where was ayva born intent"
    ],
    events:[],
    isList: false
}

// Born Intent
var Born = {
    name: 'born',
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