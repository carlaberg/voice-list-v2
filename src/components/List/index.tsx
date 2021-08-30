import React from 'react'
import { Wrapper } from './styles'

const List = ({ children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper> 
  )
}

const Item = ({ children }) => {
  return <li>{children}</li>
}

List.Item = Item

export default List

