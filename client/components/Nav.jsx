import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { getUsers } from '../apis/users'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/react'
=======
import { useSelector } from 'react-redux'
>>>>>>> 46bfbf667d39e4219ecb25fe57c44654adb9110a

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

      <Link to="/">
        <img src='./images/renterlogo.png' alt="renterlogo" className='logo' />
      </Link>

      <IfAuthenticated>
        <p>Welcome {user.nickname}!</p>

        <a href to='/rentalform' className='nav-link'>Add a Property</a>
        <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
        <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
      </IfNotAuthenticated>

    </nav >
  )
}

export default Nav
