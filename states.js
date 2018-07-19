var States = {
    
    'welcome': {
        activeIntents: ['Welcome', 'Name', 'EnableBorn'],
        middleware: ['logInput']
    },
    
    'bornEnabled': {
        activeIntents: ['Welcome','Born'],
        middleware: ['logInput']
    }

}

module.exports = States
