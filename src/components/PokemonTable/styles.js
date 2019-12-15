import { makeStyles } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    boxShadow: '0 15px 15px  -15px'
  },

  table: {
    minWidth: 750
  },

  pagination: {
    marginTop: '25px'
  },

  head: {
    backgroundColor: indigo[50]
  },
  load: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  emptyRow: {
    height: 75 * 10,
    position: 'relative'
  }
})
