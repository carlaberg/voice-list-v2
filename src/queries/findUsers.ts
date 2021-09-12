import { gql } from "@apollo/client";

const FIND_USERS = gql`
  query FindUsers($input: FindUsersInput!) {
    findUsers(input: $input) {
      _id
      email
    }
  }
`

export default FIND_USERS;