import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import Tags from '../Tags'
import { useStore } from '../../store'
import { useStyles } from '../Tags/styles'

const Search = observer(() => {
  const { setSearchValue, searchValue } = useStore()
  const classes = useStyles()

  const handleChange = event => {
    const { value } = event.target
    const newValue = value
      .split('')
      .map(char => char.toLowerCase())
      .join('')

    setSearchValue(newValue)
  }

  return (
    <Grid item container justify="space-between" alignItems="center">
      <Grid item xs={12} lg={4} container alignItems="flex-end">
        <TextField value={searchValue} onChange={handleChange} label="search: name" className={classes.formControl} />
      </Grid>
      <Grid item>
        <Tags />
      </Grid>
    </Grid>
  )
})

export default Search
