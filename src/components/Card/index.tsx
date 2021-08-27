import React from 'react'
import { Wrapper } from './styles'

interface CardProps {
  className?: any,
  children?: any
}

const Card = ({ className, children }: CardProps) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}

export default Card