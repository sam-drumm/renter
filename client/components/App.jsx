import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Home } from './Home'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import RentalForm from './RentalForm'
import Users from './Users'
import { Button, Paper, Switch } from '@material-ui/core'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import DataResponseRedo from './DataResponseRedo'

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
          <Routes>
            <Route path='/' element={<Nav/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/' element={<PingRoutes/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/register' element={<Registration/>} />
            <Route path='/reports/:address' element={<DataResponseRedo/>} />
            <Route path='/rentalform' element={<RentalForm/>} />

          </Routes>
          <Button>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
          </Button>
        </div>

      </Paper>
    </ThemeProvider>
  )
}

export default App
