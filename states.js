var States = {
    
    'welcome': {
        activeIntents: ['Welcome','Name'],
        middleware: ['logInput']
    }
}

module.exports = States
