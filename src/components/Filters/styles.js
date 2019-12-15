import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  root: {
    marginLeft: '20px'
  },
  '@media (max-width: 768px)': {
    root: {
      display: 'none'
    }
  }
})
