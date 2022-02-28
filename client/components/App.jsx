import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import SearchBar from './SearchBar'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import RentalForm from './RentalForm'
import Users from './Users'
// import { Button, Paper, Switch } from '@material-ui/core'
// import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import DataResponseRedo from './DataResponseRedo'

function App () {
  cacheUser(useAuth0)

  // const [darkMode, setDarkMode] = useState(false)

  // const theme = createTheme({
  //   palette: {
  //     type: darkMode ? 'dark' : 'light'
  //   }
  // })

  return (
    <>
      <Header />
      <main className='container margin-container flex-container centre-flex'>
        <Routes>
          <Route path='/' element={<SearchBar/>} placeholder='Start by typing the address of the rental property...' />
          <Route path='/' element={<PingRoutes/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/reports/:address' element={<DataResponseRedo/>} />
          <Route path='/rentalform' element={<RentalForm/>} />
        </Routes>
      </main>

      {/* <Paper/>
      <ThemeProvider/> */}

    </>

  )
}

export default App
