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
import DataResponsePage from './DataResponsePage'

function App () {
  cacheUser(useAuth0)

  return (

    <>
      <Header />
      <main className='container margin-container flex-container centre-flex'>
        <Routes>
          <Route path='/' element={<SearchBar/>} placeholder='Start by typing the address of the rental property...' />
          <Route path='/' element={<PingRoutes/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/reports/:address' element={<DataResponsePage/>} />
          <Route path='/rentalform' element={<RentalForm/>} />
        </Routes>
      </main>

    </>

  )
}
// change to address id
export default App
