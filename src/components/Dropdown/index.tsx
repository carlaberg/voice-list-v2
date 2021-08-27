import React, { useState, useEffect } from 'react'
import { Wrapper } from './styles'

interface DropdownProps {
  children?: any,
  isOpen?: boolean
}

const Dropdown = ({ children, isOpen = false }: DropdownProps) => {
  return (
    <Wrapper hidden={!isOpen}>
      {children}
    </Wrapper>
  )
}

const Item = (props) => {
  return <div>I am an item</div>
}

const Trigger = ({ children, toggle }) => {
  return <div onClick={toggle}>{children}</div>
}

Dropdown.Item = Item
Dropdown.Trigger = Trigger

export default Dropdown

