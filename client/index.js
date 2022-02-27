import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

// import config from './auth_config.json'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain='renter.au.auth0.com'
      clientId='KwkJ04vGoEqwk3t3JhJUdlLVmxXlaxms'
      redirectUri={window.location.origin}
      audience='https://renter/api'
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
