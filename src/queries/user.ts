import { gql } from "@apollo/client";

const USER = gql`
  query User {
    user {
      _id
      commands
      password
    }
  }
`

export default USER;