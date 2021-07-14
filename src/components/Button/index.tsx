import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  StyledButton,
  StyledLink
} from './styles'
import themes from './themes'

const Button = (props) => {
  const {
    type = 'button',
    onClick,
    theme = 'light',
    children,
    href,
    active = false
  } = props

  return (
    <ThemeProvider theme={themes[theme]}>
      {type === 'button' || type === 'submit' ? <StyledButton type={type} onClick={onClick}>{children}</StyledButton> : null}
      {type === 'link' && (
        <Link to={href}>
          <StyledLink className={active && 'active'}>{children}</StyledLink>
        </Link>
      )}
    </ThemeProvider>
  )
}

export default Button
