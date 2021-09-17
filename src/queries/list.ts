import { gql } from "@apollo/client";

const LIST = gql`
  query List($id: ID!) {
    list(id: $id) {
      name
      _id
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

export default LIST;