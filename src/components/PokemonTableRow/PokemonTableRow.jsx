import React, { useEffect } from 'react'
import { TableCell, TableRow, Avatar, Tooltip } from '@material-ui/core'
import { useStyles } from './styles'
import Span from './Span'
import { PokeListService } from '../../services/PokeListService'

const PokemonTableRow = ({ pokemon }) => {
  const classes = useStyles({
    color: pokemon.color
  })

  useEffect(() => {
    PokeListService.getBackAvatar(pokemon.avatar_back)
  })

  return (
    <TableRow className={classes.row}>
      <TableCell>
        <Tooltip
          title={
            <div className={classes.avatarContainer}>
              <Avatar src={pokemon.avatar} className={classes.avatar} variant="square" />
              <Avatar src={pokemon.avatar_back} className={classes.avatar} variant="square" />
            </div>
          }
        >
          <Avatar src={pokemon.avatar} />
        </Tooltip>
      </TableCell>
      <TableCell>{pokemon.name}</TableCell>
      <TableCell>{pokemon.exp}</TableCell>
      <TableCell>{pokemon.order}</TableCell>
      <TableCell>{pokemon.height}</TableCell>
      <TableCell>{pokemon.weight} ibs</TableCell>
      <TableCell>
        {pokemon.type.map((item, index) => (
          <Span type={item} key={index} />
        ))}
      </TableCell>
    </TableRow>
  )
}

export default PokemonTableRow
