import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import RentalForm from './RentalForm'
import Users from './Users'
import DataResponsePage from './DataResponsePage'
import LandingPage from './LandingPage'
import Footer from './Footer'

import { ChakraProvider } from '@chakra-ui/react'
import myNewTheme from '../styles/theme'

function App () {
  cacheUser(useAuth0)

  return (
    <>
      <ChakraProvider theme={myNewTheme}>
        <Header />
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
// change to address id
export default App
