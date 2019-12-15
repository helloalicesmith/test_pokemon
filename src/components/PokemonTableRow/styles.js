import { makeStyles } from '@material-ui/core'
import * as colors from '@material-ui/core/colors'
import { typeColor } from '../../constants'

const myColors = {
  ...colors,
  white: '#fff',
  gray: colors.grey,
  black: colors.grey
}

export const useStyles = makeStyles({
  row: {
    height: '75px',
    backgroundColor: ({ color }) => (color ? myColors[color][50] : null)
  },
  type: {
    padding: '10px',
    borderRadius: '20px',
    boxShadow: '2px 1px 3px #777',
    marginRight: '10px',
    backgroundColor: ({ type }) => typeColor[type]
  },
  avatarContainer: {
    display: 'flex'
  },
  avatar: {
    width: 100,
    height: 100
  }
})
