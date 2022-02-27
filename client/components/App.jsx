import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { SearchBar } from './Home'
import { Route } from 'react-router'
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
      <Route exact path='/' component={Nav} />
      <Route exact path='/' component={SearchBar} />
      <Route exact path='/' component={PingRoutes} />
      <Route exact path='/users' component={Users} />
      <Route path='/register' component={Registration} />
      <Route path='/reports' component={DataResponsePage}/>
      <Route path='/rentalform' component={RentalForm} />
    </div>

  )
}

export default App
