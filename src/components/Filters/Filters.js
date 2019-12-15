import React from 'react'
import { Select, MenuItem, FormControl } from '@material-ui/core'
import { columns } from '../../constants'
import { useStyles } from './styles'
import { useStore } from '../../store'
import { observer } from 'mobx-react-lite'

const Filters = observer(() => {
  const { setSearch } = useStore()
  const newColumns = columns.slice(1)

  const [value, setValue] = React.useState(newColumns[0].value)
  const classes = useStyles()

  const handleChange = event => {
    const { value } = event.target

    setValue(value)
    setSearch(value)
  }
  return (
    <FormControl>
      <Select value={value} onChange={handleChange} className={classes.root}>
        {newColumns.map((column, index) => (
          <MenuItem key={index} value={column.value}>
            {column.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})

export default Filters
