import { gql } from "@apollo/client";

const CREATE_LIST = gql`
  mutation CreateList($input: CreateListInput!) {
    createList(input: $input) {
      name
    }
  }
`

export default CREATE_LIST;