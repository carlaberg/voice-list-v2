const listItemTypes = require('./listitem.types');

module.exports = {
    resolvers: require('./listitem.resolvers'),
    typeDefs: listItemTypes,
    model: require('./listitem.model')
  }