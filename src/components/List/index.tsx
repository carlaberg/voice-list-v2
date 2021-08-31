import React from 'react'
import { 
  Wrapper,
  ListItem
} from './styles'

const List = ({ children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper> 
  )
}

const Item = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

List.Item = Item

export default List

