import { gql } from "@apollo/client";

const COLLABORATOR_LISTS = gql`
  query CollaboratorLists {
    collaboratorLists {
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

export default COLLABORATOR_LISTS;