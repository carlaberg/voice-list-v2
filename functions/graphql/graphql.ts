const path = require('path');
require('dotenv').config({ path: path.resolve('../../.env') });
const { ApolloServer, gql } = require('apollo-server-lambda');
const gqlServerConfig = require('./server-config');

const server = new ApolloServer(gqlServerConfig);

exports.handler = server.createHandler();