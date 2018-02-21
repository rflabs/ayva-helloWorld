var States = {
    
    'welcome': {
        activeIntents: ['Welcome','Name'],
        middleware: ['logInput']
    },

    'bornDisabled': {
        activeIntents: ['Welcome','EnableBorn'],
        middleware: ['logInput']
    },
    
    'bornEnabled': {
        activeIntents: ['Welcome','Born'],
        middleware: ['logInput']
    }

}

module.exports = States
