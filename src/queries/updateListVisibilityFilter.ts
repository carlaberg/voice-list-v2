import { gql } from "@apollo/client";

const UPDATE_LIST_VISIBILITY_FILTER = gql`
    mutation UpdateListVisibilityFilter($id: ID!) {
        updateListVisibilityFilter(id: $id) @client
    }
`

export default UPDATE_LIST_VISIBILITY_FILTER;