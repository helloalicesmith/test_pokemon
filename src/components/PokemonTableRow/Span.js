import React from 'react'
import { useStyles } from './styles'

const Span = ({ type }) => {
  const classes = useStyles({
    type: type
  })
  return <span className={classes.type}>{type}</span>
}

export default Span
