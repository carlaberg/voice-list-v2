const { gql } = require('apollo-server-lambda');

const listItemTypes = gql`
  type ListItem {
    _id: ID!
    text: String!
    list: List!
  }

  input CreateListItemInput {
    text: String!
    list: ID!
  }

  input UpdateListItemInput {
    text: String!
  }

  extend type Mutation {
    createListItem(input: CreateListItemInput!): ListItem!
    updateListItem(id: ID!, input: UpdateListItemInput!): ListItem!
    deleteListItem(id: ID!): ListItem!
  }
`

module.exports = listItemTypes
