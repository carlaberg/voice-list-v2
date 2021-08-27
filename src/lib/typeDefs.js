import gql from 'graphql-tag'

export const typeDefs = gql`
  extend type Query {
    test: String!
  }

  extend type List {
    open: Boolean!
    settingsMenuOpen: Boolean!
  }

  input UpdateListVisibiltyInput {
    open: Boolean
    settingsMenuOpen: Boolean
  }
`