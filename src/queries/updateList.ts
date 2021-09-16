import { gql } from "@apollo/client";

const UPDATE_LIST = gql`
    mutation UpdateList($id: ID!, $input: UpdateListInput!) {
        updateList(id: $id, input: $input) {
            _id
        }
    }
`

export default UPDATE_LIST;