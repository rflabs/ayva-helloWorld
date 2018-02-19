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
        "My name is kevin",
        "test 2"
    ],
    events:[]
}

var speechModel = {
    intents: [
        Welcome,
        Name
    ],
}

module.exports = speechModel;