import React, { useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import PokemonTable from '../PokemonTable'
import Search from '../Search/Search'
import { useStyles } from './styles'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

const PokeList = observer(() => {
  const { fetch, pokemons } = useStore()

  const classes = useStyles()

  useEffect(() => {
    fetch(10, 0)
  }, [])

  if (!pokemons.length) {
    return (
      <div className={classes.load}>
        <CircularProgress />
      </div>
    )
  }

  return (
    <Grid container justify="center" alignItems="center" direction="column" className={classes.root}>
      <Grid container item direction="column" xs={12} lg={8}>
        <Search />
        <PokemonTable />
      </Grid>
    </Grid>
  )
})

export default PokeList
