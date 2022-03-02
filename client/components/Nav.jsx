import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'

function Nav () {
  const user = useSelector(state => state.user)

  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin (event) {
    event.preventDefault()
    login()
  }

  function handleLogoff (event) {
    event.preventDefault()
    logout()
  }

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  return (
    <nav className='nav'>

      <IfAuthenticated>
        <p>Welcome {user.nickname}!</p>
        <a href='/' className='nav-link'>Home</a>
        <a href='/rentalform' className='nav-link'>Renter form</a>
        <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <a href='/' className='nav-link'>Home</a>
        <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
        <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
      </IfNotAuthenticated>

    </nav >
  )
}

export default Nav
