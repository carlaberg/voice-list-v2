import { gql } from "@apollo/client";

const LOGGED_IN_USER = gql`
  query LoggedInUser {
    loggedInUser {
      userId
    }
  }
`

export default LOGGED_IN_USER;