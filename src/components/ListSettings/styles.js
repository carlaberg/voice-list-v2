import styled from 'styled-components'
import { FontLarge, FontMedium, FontSmall } from '../../layout/mixins'
import TrashIcon from '../../layout/icons/trash.svg'
import { Wrapper as ProfileImage } from '../ProfileImage/styles'

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colorGrayLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.gutterMedium};
`

export const Header = styled.div``;

export const Title = styled.h2`
  ${FontLarge}
  margin-bottom: ${({ theme }) => theme.gutterSmall};
`

export const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colorGray};
  margin-bottom: ${({ theme }) => theme.gutter};
`

export const Grid = styled.div`
  display: flex;
`
export const Main = styled.div`
  width: 70%;
  padding-right: ${({ theme }) => theme.gutter};
`

export const SidePanel = styled.div`
  width: 30%;
`

export const Trash = styled(TrashIcon)`
  width: 1em;
  height: 1em;
  margin-left: ${({ theme }) => theme.gutterSmall};
  fill: ${({ theme }) => theme.colorGray};
`

export const CollaboratorItemGroup = styled.div`
  ${FontMedium}
  display: flex;
  align-items: center;

  ${ProfileImage} {
    width: 3em;
    height: 3em;
    ${FontSmall}
    margin-right: ${({ theme }) => theme.gutterSmall};
  }
`
