import React from 'react'
import PokeList from './components/PokeList'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { theme } from './theme'
import { StoreProvider } from './store'

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <StoreProvider>
        <CssBaseline />
        <PokeList />
      </StoreProvider>
    </MuiThemeProvider>
  )
}

export default App
