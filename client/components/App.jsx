import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
// import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import Users from './Users'
import DataResponsePage from './DataResponsePage'
import LandingPage from './LandingPage'
import Footer from './Footer'
import RentalForm from './RentalForm'
import Header from './Header'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import myNewTheme from '../styles/theme'
// import theme, { Example } from './DarkMode'

function App () {
  cacheUser(useAuth0)

  return (
    <>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <ChakraProvider theme={myNewTheme}>
        <Header />
        {/* <Example /> */}
        <Routes>
          <Route path='/' element={
            <>
              <LandingPage/>
              <Footer/>
            </>} />
          <Route path='/' element={<PingRoutes/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/reports/:address' element={<DataResponsePage/>} />
          <Route path='/rentalform' element={<RentalForm/>} />
        </Routes>
      </ChakraProvider>
    </>

  )
}

export default App
