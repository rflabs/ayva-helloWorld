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
        "My name is kevin"
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