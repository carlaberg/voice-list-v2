import { gql } from "@apollo/client";

const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
      userId
      commands
    }
  }
`

export default UPDATE_USER;