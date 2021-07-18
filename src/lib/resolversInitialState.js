import { gql } from "@apollo/client";
export const resolversInitialState = {
  query: gql`
    query GetCurrentList {
      currentList {
        name
        items
      }
      test
      open
    }
  `,
  data: {
    currentList: {
      __typename: 'CurrentList',
      name: '',
      items: []
    },
    test: 'kille',
    open: false
  }
}