var Intents = {}

Intents['welcome'] = require('./Welcome');
Intents.name = require('./Name')
Intents.enableBorn = require('./EnableBorn')
Intents.born = require('./Born')

module.exports = Intents;