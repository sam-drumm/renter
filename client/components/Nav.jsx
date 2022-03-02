import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../apis/users'

function Nav () {
  const user = useSelector(state => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  const [nickname, setNickname] = useState('')

  useEffect(() => {
    if (user.auth0Id) {
      getUsers()
        .then(res => {
          setNickname(res)
          return null
        })
        .catch(err => {
          console.error(err)
        })
    }
  }, [])

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
      <section className='nav-item'>
        <IfAuthenticated>

          { nickname &&
          <p>Welcome {nickname}!</p>
          }
          <section className='sign'>
            <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
          </section>

        </IfAuthenticated>
        <IfNotAuthenticated>

          <section className='sign'>
            <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
            <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
          </section>

        </IfNotAuthenticated>
      </section>
    </nav >
  )
}

export default Nav
