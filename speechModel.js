var Welcome = {
    name: 'welcome',
    utterances: [],
    events:[
        "Welcome"
    ],
    slots: {},
    isList: false
}

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
            required: false
        }
    },
    events:[],
    isList: false
}

var speechModel = {
    intents: [
        Welcome,
        Name
    ],  
}

module.exports = speechModel;