import React, { useState } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import debounce from 'just-debounce-it'
import LISTS from '../../queries/lists'
import DELETE_LIST_AND_ITEMS from '../../queries/deleteListAndItems'
import DELETE_LIST_ITEM from '../../queries/deleteListItem'
import UPDATE_LIST_VISIBILITY_FILTER from '../../queries/updateListVisibilityFilter'
import UPDATE_LIST_ITEM from '../../queries/updateListItem'
import { Toggle } from 'carls-components'
import Modal from '../Modal'
import {
  Heading1,
  Heading2,
  ListContainer,
  List,
  ListItem,
  IconGroup,
  ItemIconGroup,
  StyledEditableInput,
  MenuArrow,
  VerticalDots,
  Trash,
  Edit
} from './styles'
import Spinner from '../Spinner'
import ApproveOrDeny from '../ApproveOrDeny'
import ListSettings from '../ListSettings'

const ListListing = () => {

  let itemInput = React.createRef()

  let history = useHistory()
  let location = useLocation()

  const {
    error: listsError,
    loading: listsLoading,
    data: listsData
  } = useQuery(LISTS)

  const [deleteListAndItems, { data: deleteListAndItemsData }] = useMutation(
    DELETE_LIST_AND_ITEMS, {
      update(cache, { data: { deleteListAndItems: deletedList } }) {
        const { userLists } = cache.readQuery({ query: LISTS })
        const updatedList = userLists.filter((item) => item._id !== deletedList._id)  
        cache.writeQuery({
          query: LISTS,
          data: { userLists: updatedList }
        })
      }
    }
  )

  const [deleteListItem, { data: deleteListItemData }] = useMutation(DELETE_LIST_ITEM, {
    refetchQueries: [{ query: LISTS }]
  })

  const [updateListItem, { data: updateListItemData }] = useMutation(UPDATE_LIST_ITEM)

  const [updateListVisibilityFilter, { data: updateListVisibilityFilterData }] = useMutation(UPDATE_LIST_VISIBILITY_FILTER)
  const [activeInput, setactiveInput] = useState(null)

  const handleListItemChange = debounce((id, value) => {
    updateListItem({ variables: { id, input: { text: value } } })
  }, 500)

  if (listsError) return null
  if (listsLoading) return <Spinner />


  return (
    <React.Fragment>
      <Heading1>YOUR LISTS</Heading1>
      {listsData.userLists.map((list, listIndex) => (
        <React.Fragment key={list._id}>
          <ListContainer
            className={listsData.userLists.find((item) => item._id == list._id)?.open && 'list--open'}
          >
            <Heading2
              onClick={(e: any) => {
                updateListVisibilityFilter({ variables: { id: list._id, input: { open: !list.open} } })
              }}
            >
              {list.name}
              <IconGroup>
                <Toggle>
                  {({ on, toggle }) => (
                    <React.Fragment>
                      <Trash onClick={toggle} />
                      <Modal toggle={toggle} on={on}>
                        {() => (
                          <ApproveOrDeny
                            approveCallback={() => {
                              deleteListAndItems({ variables: { id: list._id } })
                              toggle()
                            }}
                            denyCallback={toggle}
                          />
                        )}
                      </Modal>
                    </React.Fragment>
                  )}
                </Toggle>
                <Link
                  to={{
                    pathname: `/lists/settings/${list._id}`,
                    state: { background: location }
                  }}
                >
                  <VerticalDots />
                </Link>
                <MenuArrow />
              </IconGroup>
            </Heading2>
            <List key={list._id}>
              {list.items.map((item, itemIndex) => (
                <ListItem
                  // @ts-ignore
                  ref={itemInput}
                  className={activeInput === item._id ? 'active' : ''} 
                  key={item._id}
                  onClick={() => setactiveInput(item._id)}
                >
                  <StyledEditableInput
                    // @ts-ignore
                    defaultValue={item.text}
                    isFocused={activeInput === item._id}
                    onBlur={() => setactiveInput(null)}
                    onChange={(e) => {
                      const value = e.target.value
                      handleListItemChange(item._id, value)
                    }}                    
                  />
                  <ItemIconGroup>
                    <Edit onClick={() => setactiveInput(item._id)} />
                    <Trash onClick={() => {
                      deleteListItem({ variables: { id: item._id } })
                    }} />
                  </ItemIconGroup>
                </ListItem>
              ))}
            </List>
          </ListContainer>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ListListing