import { gql } from "@apollo/client";

const USER_LISTS = gql`
  query UserLists {
    userLists {
      name
      _id
      open @client
      settingsMenuOpen @client
      __typename
      items {
        _id
        text
      }
      collaborators {
        _id
        firstname
        lastname
      }
    }
  }
`

export default USER_LISTS;