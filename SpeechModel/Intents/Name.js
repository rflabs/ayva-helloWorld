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

module.exports = Name;