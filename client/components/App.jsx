import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import SearchBar from './SearchBar'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import RentalForm from './RentalForm'
import Users from './Users'
import DataResponsePage from './DataResponsePage'

function App () {
  cacheUser(useAuth0)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Nav/>} />
        <Route path='/' element={<SearchBar/>} />
        <Route path='/' element={<PingRoutes/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/reports/:address' element={<DataResponsePage/>} />
        <Route path='/rentalform' element={<RentalForm/>} />

      </Routes>
      <SearchBar placeholder='Start by typing the address of the rental property...' />
    </div>

  )
}

export default App
