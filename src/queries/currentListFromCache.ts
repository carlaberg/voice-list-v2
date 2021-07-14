import { gql } from "@apollo/client";

const CURRENT_LIST_FROM_CACHE = gql`
  query {
    currentList {
      listItems
    }
  }
`

export default CURRENT_LIST_FROM_CACHE;