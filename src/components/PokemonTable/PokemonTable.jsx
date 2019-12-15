import React, { useState } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TableHead,
  Typography,
  CircularProgress
} from '@material-ui/core'
import { columns } from '../../constants'
import PokemonTableRow from '../PokemonTableRow/PokemonTableRow'
import { useStyles } from './styles'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

const PokemonTable = observer(() => {
  const { fetch, filterPokemons, count, getFilterTags, tags, isLoad } = useStore()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const classes = useStyles()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    const size = rowsPerPage * newPage

    fetch(rowsPerPage, size)
  }

  const handleChangeRowsPerPage = event => {
    const { value } = event.target
    const size = rowsPerPage * page

    setRowsPerPage(value)
    fetch(value, size)
  }

  const data = getFilterTags.length || tags.length ? getFilterTags : filterPokemons

  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead className={classes.head}>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>
                  <Typography variant="h6" className={classes.headFont}>
                    {column.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoad ? (
              <TableRow className={classes.emptyRow}>
                <TableCell>
                  <CircularProgress className={classes.load} />
                </TableCell>
              </TableRow>
            ) : (
              data.map((item, index) => <PokemonTableRow pokemon={item} key={index} />)
            )}
          </TableBody>
        </Table>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className={classes.pagination}
        labelRowsPerPage={'Rows'}
      />
    </>
  )
})

export default PokemonTable
