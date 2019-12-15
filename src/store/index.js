import React from 'react'
import { action, configure, computed, observable, runInAction } from 'mobx'
import { PokeListService } from '../services/PokeListService'
import { getIdURL, getNewPokemons, getFilterType } from '../helpers/index'
import { useLocalStore } from 'mobx-react-lite'

configure({ enforceActions: 'observed' })

class PokemonStore {
  @observable.ref pokemons = []
  @observable.ref colors = []
  @observable.ref count = 0
  @observable.ref searchValue = ''
  @observable.ref search = 'name'
  @observable.ref tags = []
  @observable.ref filterTags = []
  @observable.ref isLoad = false

  @action.bound
  async fetch(limit, offset) {
    this.searchValue = ''
    this.isLoad = true
    try {
      const { results, count } = await PokeListService.getPokemons(limit, offset)
      const ids = getIdURL(results)

      const pokemons = await Promise.all(ids.map(id => PokeListService.getPokemons(limit, offset, id)))
      const colors = await Promise.all(ids.map(id => PokeListService.getPokemonSpecies(id)))

      runInAction(() => {
        this.pokemons = pokemons
        this.colors = colors
        this.count = count
        this.tags = []
        this.isLoad = false
      })
    } catch (e) {}
  }

  @action.bound
  setSearchValue(value) {
    this.searchValue = value
  }

  @action.bound
  setSearch(search) {
    this.search = search
  }

  @action.bound
  setTags(tags) {
    this.tags = tags
  }

  @computed
  get filterPokemons() {
    return getNewPokemons(this.pokemons, this.colors, this.search, this.searchValue, this.tags)
  }

  @computed
  get getFilterTags() {
    return getFilterType(this.tags, this.filterPokemons)
  }
}

export const storeContext = React.createContext(new PokemonStore())

export const StoreProvider = ({ children }) => {
  const value = useLocalStore(() => new PokemonStore())
  return <storeContext.Provider value={value}>{children}</storeContext.Provider>
}

export const useStore = () => React.useContext(storeContext)
