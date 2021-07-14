import { gql } from "@apollo/client";

const UPDATE_LIST_ITEM = gql`
    mutation UpdateListItem($id: ID!, $input: UpdateListItemInput!) {
        updateListItem(id: $id, input: $input) {
            _id
        }
    }
`

export default UPDATE_LIST_ITEM;