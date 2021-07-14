import { gql } from "@apollo/client";

const CURRENT_LIST = gql`
  query {
    currentList @client {
      name,
      items
    }
  }
`

export default CURRENT_LIST;