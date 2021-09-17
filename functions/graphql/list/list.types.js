const { gql } = require('apollo-server-lambda');

const listTypes = gql`
    type List {
      _id: ID!
      name: String!
      items: [ListItem]!
      createdBy: User!
      collaborators: [User]!
    }

    input CreateListInput {
      name: String!
    }

    input CreateListWithItemsInput {
      name: String!
      items: [String!]!
    }

    input UpdateListInput {
      name: String,
      collaborators: [ID]
    }

    extend type Query {
      list(id: ID!): List!
      userLists: [List!]!
    }

    extend type Mutation {
      createList(input: CreateListInput!): List!
      createListWithItems(input: CreateListWithItemsInput!): List!
      updateList(id: ID!, input: UpdateListInput!): List!
      deleteList(id: ID!): List!
      deleteListAndItems(id: ID!): List!
    }
`

module.exports = listTypes