import { gql } from "@apollo/client";

const USER_LISTS = gql`
  query UserLists {
    userLists {
      name
      _id
      open @client
      __typename
      items {
        _id
        text
      }
    }
  }
`

export default USER_LISTS;