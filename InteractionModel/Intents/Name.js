// Name Intent
var Name = {
    name: 'Name',
    utterances: [
        "My name is {'firstName':'George'}",
        "{'firstName':'Oscar'}",
        "I am {'firstName':'Michael'}",
        "I'm {'firstName':'Lucille'}"
    ],
    slots: {
        "firstName" : {
            dataType: ["@sys.given-name","AMAZON.US_FIRST_NAME"],
            isList: false,
            required: true,
            prompts: [
                "Sorry, I didn't hear your name. Could you say that again?"
            ]
        }
    }
}

module.exports = Name;