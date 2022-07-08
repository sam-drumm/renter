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

import WaitIndicator from './WaitIndicator'

function App () {
  cacheUser(useAuth0)

  return (
    <>
      <WaitIndicator/>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/reports/:address' element={<DataResponsePage/>} />
        <Route path='/rentalform' element={<RentalForm/>} />
      </Routes>
      <Footer/>
    </>

  )
}

export default App
