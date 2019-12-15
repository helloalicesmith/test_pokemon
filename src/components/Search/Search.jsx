import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import Filters from '../Filters'
import Tags from '../Tags'
import { useStore } from '../../store'
import { columns } from '../../constants'
import { useStyles } from '../Tags/styles'

const Search = observer(() => {
  const { setSearchValue, searchValue, search } = useStore()
  const classes = useStyles()

  const handleChange = event => {
    const { value } = event.target
    setSearchValue(value)
  }

  const label = columns.find(column => column.value === search).label

  return (
    <Grid item container justify="space-between" alignItems="center">
      <Grid item xs={12} lg={4} container alignItems="flex-end">
        <TextField
          value={searchValue}
          onChange={handleChange}
          label={`search: ${label}`}
          className={classes.formControl}
        />
        {/*<Filters />*/}
      </Grid>
      <Grid item>
        <Tags />
      </Grid>
    </Grid>
  )
})

export default Search
