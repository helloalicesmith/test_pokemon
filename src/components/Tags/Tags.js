import React from 'react'
import { Select, MenuItem, ListItemText, FormControl, InputLabel } from '@material-ui/core'
import ChipType from './Chip'
import { typeColor } from '../../constants'
import { useStyles } from './styles'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

const Tags = observer(() => {
  const { setTags, tags } = useStore()
  const classes = useStyles()

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  }

  const handleChange = event => {
    const { value } = event.target
    setTags(value)
  }

  const renderValue = selected => {
    const newSelected = selected.length > 3 ? selected.slice(0, 3) : tags

    return (
      <>
        {newSelected.map((value, index) => (
          <ChipType key={index} value={value} />
        ))}
      </>
    )
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Tags</InputLabel>
      <Select multiple value={tags} onChange={handleChange} MenuProps={MenuProps} renderValue={renderValue}>
        {Object.keys(typeColor).map((type, index) => (
          <MenuItem key={index} value={type}>
            <ListItemText primary={type} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})

export default Tags
