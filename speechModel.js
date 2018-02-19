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
        "My name is {'name':'Kevin'} and I love Ayva",
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