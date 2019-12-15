import { makeStyles } from '@material-ui/core'
import { typeColor } from '../../constants'

export const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  type: {
    backgroundColor: ({ type }) => {
      return typeColor[type]
    },
    height: '20px',
    width: '60px'
  }
}))
