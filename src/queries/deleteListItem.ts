import { gql } from "@apollo/client";

const DELETE_LIST_ITEM = gql`
  mutation DeleteListItem($id: ID!) {
    deleteListItem(id: $id) {
      _id
      text
    }
  }
`

export default DELETE_LIST_ITEM;