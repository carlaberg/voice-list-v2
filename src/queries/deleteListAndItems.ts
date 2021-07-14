import { gql } from "@apollo/client";

const DELETE_LIST_AND_ITEMS = gql`
  mutation DeleteListAndItems($id: ID!) {
    deleteListAndItems(id: $id) {
      _id
    }
  }
`

export default DELETE_LIST_AND_ITEMS;