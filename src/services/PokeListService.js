import axios from '../utils/axios'

export const PokeListService = class {
  static getPokemons = async (limit, offset = '', id = '') => {
    const { data } = await axios.get(`/pokemon/${id}?limit=${limit}&offset=${offset}`)
    return data
  }

  static getPokemonSpecies = async id => {
    const { data } = await axios.get(`/pokemon-species/${id}`)
    return data
  }
}
