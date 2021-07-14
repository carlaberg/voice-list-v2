import styled, { css } from 'styled-components'
import { FontMedium } from '../../layout/mixins'

export const Wrapper = css`
  height: 40px;
  border: ${props => props.theme.border};
  background: ${props => props.theme.backgroundColor};
  cursor: pointer;
  padding: 0 15px;
  text-transform: uppercase;
  ${FontMedium}
  color: ${props => props.theme.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
`

export const StyledButton = styled.button`
  ${Wrapper}
`

export const StyledLink = styled.a`
  ${Wrapper}
`
