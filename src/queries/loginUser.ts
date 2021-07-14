import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      token
      userId
    }
  }
`

export default LOGIN_USER;