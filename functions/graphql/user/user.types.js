const { gql } = require('apollo-server-lambda');

const userTypes = gql`
  type Commands {
    confirm: String
    add: String
    remove: String
  }

  input CommandsInput {
    confirm: String
    add: String
    remove: String
  }

  type User {
    _id: ID!
    email: String!
    firstname: String!,
    lastname: String!,
    commands: Commands
  }

  type LoggedInUserPayload {
    userId: ID
  }

  input FindUsersInput {
    userId: String
    email: String
  }

  input CreateUserInput {
    email: String!
    password: String!
  }

  input UpdateUserInput {
    commands: CommandsInput
  }

  type AuthData {
    token: String!
    userId: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    user: User!
    findUsers(input: FindUsersInput!): [User]!
    loggedInUser: LoggedInUserPayload
  }

  type Mutation {
    loginUser(input: LoginInput!): AuthData!
    createUser(input: CreateUserInput!): AuthData!
    updateUser(input: UpdateUserInput): User
  }
`

module.exports = userTypes;