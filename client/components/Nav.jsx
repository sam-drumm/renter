import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'
// import { getUsers } from '../apis/users'
import { IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'

function Nav () {
  const [open, setOpen] = useState(false)
  // const user = useSelector(state => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  // const [nickname, setNickname] = useState('')

  // useEffect(() => {
  //   if (user.auth0Id) {
  //     getUsers()
  //       .then(res => {
  //         setNickname(res.nickname)
  //         return null
  //       })
  //       .catch(err => {
  //         console.error(err)
  //       })
  //   }
  // }, [])

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

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <nav className='nav'>
      {open && <div className='nav-menu-toggle' onClick={toggleMenu}>

        <Link to="/">
          <img src='./images/renterlogo.png' alt="renterlogo" className='logo' />
        </Link>

        <IfAuthenticated>
          <a href to="/" className='nav-link'>Home</a>
          <a href to="/rentalform/" className='nav-link'>Add a Property</a>
          <a href to="/" className='nav-link'>Your Properties</a>
          <a href to="/" className='nav-link'>Your Profile</a>
          <a href to="/" className='nav-link'>More about Renter</a>
          <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
          <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
        </IfNotAuthenticated>

        <div className='close-btn' onClick={toggleMenu} ><IoClose/></div>
      </div>

      }
      {!open && <div className='nav-menu'>

        <Link to="/">
          <img src='./images/renterlogo.png' alt="renterlogo" className='logo' />
        </Link>

        <IfAuthenticated>
          <a href to="/" className='nav-link'>Home</a>
          <a href to="/rentalform/" className='nav-link'>Add a Property</a>
          <a href to="/" className='nav-link'>Your Properties</a>
          <a href to="/" className='nav-link'>Your Profile</a>
          <a href to="/" className='nav-link'>More about Renter</a>
          <a href='/' onClick={handleLogoff} className='nav-link'>Log out</a>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
          <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
        </IfNotAuthenticated>

        <div className='hamburger' onClick={toggleMenu} ><GiHamburgerMenu/></div>
      </div>

      }

    </nav >
  )
}

export default Nav
