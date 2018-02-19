var Welcome = {
    name: 'welcome',
    utterances: [],
}

var Name = {
    name: 'name',
    utterances: [
        "My name is kevin"
    ]
}

var speechModel = {
    intents: [
        Welcome,
        Name
    ],
}

module.exports = speechModel;