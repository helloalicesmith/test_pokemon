export const getIdURL = result => result.map(item => item.url).map(url => url.split('/').reverse()[1])

const getColors = (colors, id) => colors.find(item => item.id === id).color.name
const getTypes = pokemon => pokemon.types.map(({ type }) => type.name)

export const serialize = (pokemons, color) =>
  pokemons.map(pokemon => ({
    name: pokemon.name,
    avatar: pokemon.sprites.front_default,
    avatar_back: pokemon.sprites.back_default,
    exp: String(pokemon.base_experience),
    weight: String(Math.round((pokemon.weight / 10) * 2.2046)),
    height: String(pokemon.height),
    order: String(pokemon.order),
    color: getColors(color, pokemon.id),
    type: getTypes(pokemon)
  }))

export const getFilterType = (tags, pokemons) =>
  pokemons.filter(({ type }) => {
    for (const item of type) {
      if (tags.includes(item)) {
        return true
      }
    }
  })

export const getNewPokemons = (pokemons, colors, search, searchValue) =>
  serialize(pokemons, colors).filter(pokemon => pokemon.name.includes(searchValue))
