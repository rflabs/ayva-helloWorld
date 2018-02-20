var States = {
    
    'welcome': {
        activeIntents: ['welcome','name'],
        middleware: ['logInput']
    },

    'bornDisabled': {
        activeIntents: ['welcome','enableBorn'],
        middleware: ['logInput']
    },
    
    'bornEnabled': {
        activeIntents: ['welcome','born'],
        middleware: ['logInput']
    }

}

module.exports = States
