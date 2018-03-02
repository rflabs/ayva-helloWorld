
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
            dataType_alexa: "AMAZON.US_FIRST_NAME",
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
        "enable intent",
        "enable"
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

//Simple custom entity
var HousePets = {name:"HousePets", values:['dog', 'cat', 'turtle', 'snake']};

//Custom entity with synonyms
var Sports = {
    name: "Sports",
    values: [{
        name: 'Basketball',
        synonyms: ['hoops', 'baskets']
    },
    {
        name: 'Football',
        synonyms: ['American football', 'gridiron football']
    }]
}

// Export object to access all defined intents
var speechModel = {
    intents: [
        Welcome,
        Name,
        EnableBorn,
        Born
    ],
    entities: [
        HousePets,
        Sports
    ]
}

module.exports = speechModel;