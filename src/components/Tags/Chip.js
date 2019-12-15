import React from 'react'
import { Chip } from '@material-ui/core'
import { useStyles } from './styles'

const ChipType = ({ value }) => {
  const classes = useStyles({
    type: value
  })
  return <Chip key={value} label={value} className={classes.type} />
}

export default ChipType
