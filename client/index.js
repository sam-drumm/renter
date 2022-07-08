import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import store from './store'

import config from './auth_config.json'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import renterTheme from './styles/theme'
import theme from './components/DarkMode'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        redirectUri={window.location.origin}
        audience={config.audience}
      >
        <Provider store={store}>
          <ChakraProvider theme={renterTheme}>
            <App />
          </ChakraProvider>
        </Provider>
      </Auth0Provider>
    </Router>,
    document.getElementById('app')
  )
})
