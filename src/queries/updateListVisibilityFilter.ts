import { gql } from "@apollo/client";

const UPDATE_LIST_VISIBILITY_FILTER = gql`
    mutation UpdateListVisibilityFilter($id: ID!, $input: UpdateListVisibiltyInput!) {
        updateListVisibilityFilter(id: $id, input: $input) @client
    }
`

export default UPDATE_LIST_VISIBILITY_FILTER;