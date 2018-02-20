var Welcome = {
    name: 'welcome',
    utterances: [],
    events:[
        "Welcome"
    ]
}

var Name = {
    name: 'name',
    utterances: [
        "My name is {'name':'Kevin'}",
        "{'name':'Gavin'}",
        "I am {'name':'Sophie'}"
    ],
    slots: {'given-name':"@sys.given-name"},
    events:[]
}

var speechModel = {
    intents: [
        Welcome,
        Name
    ],
}

module.exports = speechModel;