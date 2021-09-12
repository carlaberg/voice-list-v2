import styled from 'styled-components'
import { FontMedium, FontSmall, FontLarge } from '../../layout/mixins'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const StyledInput = styled.input`
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colorWhite};
  height: 40px;
  ${FontMedium};
  color: ${({ theme }) => theme.colorBlack};
  border-bottom: 1px solid ${({ theme }) => theme.colorGrayOpacity};
  padding-right: 20px;

  &::placeholder {
    ${FontSmall};
    color: ${({ theme }) => theme.colorGray};
  }

  &:focus + span {
    width: 100%;
  }
`

export const Label = styled.label`
  position: absolute;
  bottom: 100%;
  left: 0;
  transform: translateY(-50%);
  ${FontMedium};
  font-weight: bold;
  color: ${({ theme }) => theme.colorBlack};

  ${StyledInput}:focus +  {
    color: red;
  }
`

export const Underline = styled.span<{
  isFocused: boolean
}>`
  width: 0;
  height: 1px;
  background: ${({ theme }) => theme.colorBlue};
  display: block;
  transition: width ${({ theme }) => theme.transitionRegular};
  transform: translateY(-1px);
  ${({ isFocused }) => isFocused && `
    width: 100%;
  `}
`

export const Message = styled.div<{
  message: string,
  show: boolean
}>`
  height: 30px;
  line-height: 30px;
  ${FontSmall};
  color: ${({ theme }) => theme.colorAccentOpacity};
  opacity: ${props => (!props.show ? '0' : '1')};
  transition: opacity ${({ theme }) => theme.transitionRegular};
`

export const Indicator = styled.span<{
  show: boolean,
  valid: boolean
}>`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 20px;
  transform: translateY(-50%);
  background: ${props => (props.valid ? props.theme.colorGreen : props.theme.colorAccent)};
  transition: ${({ theme }) => `background ${theme.transitionRegular}, opacity ${theme.transitionRegular}`};
  opacity: ${props => (props.show ? '1' : '0')};
`
