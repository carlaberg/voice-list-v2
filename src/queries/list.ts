import { gql } from "@apollo/client";

const LIST = gql`
  query List($id: ID!) {
    list(id: $id) {
      _id
      name
    }
  }
`

export default LIST;