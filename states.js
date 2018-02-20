var States = {
    
    'welcome': {
        activeIntents: ['welcome','name'],
        middleware: ['logInput']
    },

    'newUser': {
        activeIntents: ['welcome','name'],
        middleware: ['logInput']
    },

    'nameSet': {
        activeIntents: ['welcome','name'],
        middleware: ['logInput']
    },

}

module.exports = States
