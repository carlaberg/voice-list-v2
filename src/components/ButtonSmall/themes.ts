import { theme } from '../../layout/theme'

export default {
  dark: {
    backgroundColor: theme.colorAccent,
    color: theme.colorWhite,
    border: 'none'
  },
  light: {
    backgroundColor: 'none',
    color: theme.colorAccent,
    border: `2px solid ${theme.colorAccent}`
  },
  ['black-outline']: {
    backgroundColor: 'none',
    color: theme.colorBlack,
    border: `2px solid ${theme.colorBlack}`
  }
}
