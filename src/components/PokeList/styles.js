import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  root: {
    minHeight: '100vh'
  },
  load: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})
