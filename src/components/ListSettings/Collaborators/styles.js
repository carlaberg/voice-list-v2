import styled from 'styled-components'
import TrashIcon from '../../../layout/icons/trash.svg'
import { trimUnits } from '../../../lib/utils'
import { FontMedium, FontExtraSmall } from '../../../layout/mixins'
import { Wrapper as ProfileImage } from '../../ProfileImage/styles'

export const Wrapper = styled.div``

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
