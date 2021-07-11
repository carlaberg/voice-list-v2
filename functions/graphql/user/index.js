const userTypes = require('./user.types');

module.exports = {
    resolvers: require('./user.resolvers'),
    typeDefs: userTypes,
    model: require('./user.model')
  }