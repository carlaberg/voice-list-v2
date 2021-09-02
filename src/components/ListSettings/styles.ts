import styled from 'styled-components'
import { FontLarge, FontMedium, FontExtraSmall } from '../../layout/mixins'
import TrashIcon from '../../layout/icons/trash.svg'
import { Wrapper as ProfileImage } from '../ProfileImage/styles'
import { trimUnits } from '../../lib/utils'
import Card from '../Card'

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
  width: 75%;
  padding-right: ${({ theme }) => theme.gutter};
`

export const StyledCard = styled(Card)`
  border-color: ${({ theme }) => theme.colorGray};
`

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  button {
    margin-bottom: ${({ theme }) => (trimUnits(theme.gutterSmall) / 2) + 'rem'};
  
    &:last-of-type {
      margin-bottom: 0;       
    }    
  }
`

export const Trash = styled(TrashIcon)`
  width: 1em;
  height: 1em;
  margin-left: ${({ theme }) => theme.gutterSmall};
  fill: ${({ theme }) => theme.colorGray};
`

export const CollaboratorName = styled.div``

export const SettingsGroupTitle = styled.h3`
  ${FontMedium}
  margin-bottom: ${({ theme }) => (trimUnits(theme.gutterSmall) / 2) + 'rem'};
`

export const CollaboratorGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  row-gap: ${({ theme }) => (trimUnits(theme.gutterSmall) / 2) + 'rem'};

  ${Trash}, ${CollaboratorName} {
    margin-right: ${({ theme }) => theme.gutter};
  }

  ${ProfileImage} {
    width: 3em;
    height: 3em;
    ${FontExtraSmall}
    margin-right: ${({ theme }) => theme.gutterSmall};
  }
`
