import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Home } from './Home'
import { Route } from 'react-router'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import RentalForm from './RentalForm'
import Users from './Users'
import DataResponsePage from './DataResponsePage'
import { Button, Paper, Switch } from '@material-ui/core'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'

function App () {
  cacheUser(useAuth0)

  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <div className='app'>
          <Route exact path='/' component={Nav} />
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={PingRoutes} />
          <Route exact path='/users' component={Users} />
          <Route path='/register' component={Registration} />
          <Route path='/reports/:address' component={DataResponsePage} />
          <Route path='/rentalform' component={RentalForm} />
          <Button>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
          </Button>
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App
