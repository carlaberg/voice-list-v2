const listTypes = require('./list.types');

module.exports = {
    resolvers: require('./list.resolvers'),
    typeDefs: listTypes,
    model: require('./list.model')
  }