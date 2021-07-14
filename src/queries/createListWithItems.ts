import { gql } from "@apollo/client";

const CREATE_LIST_WITH_ITEMS = gql`
  mutation CreateListWithItems($input: CreateListWithItemsInput!) {
    createListWithItems(input: $input) {
      _id
      name
      items {
        _id
        text
      }
    }
  }
`

export default CREATE_LIST_WITH_ITEMS