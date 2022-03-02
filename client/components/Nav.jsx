import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../apis/users'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/react'

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
    <>
    <Box>
     <IfAuthenticated>
   
         { nickname &&
          <Text>Welcome {nickname}!</Text>
          }
      <Breadcrumb color='teal' fontSize='2xl' m={10}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/' onClick={handleLogoff}>Log out</BreadcrumbLink>
      </BreadcrumbItem>
      </Breadcrumb>
    </IfAuthenticated>
   
    <IfNotAuthenticated>
    <Breadcrumb color='teal' fontSize='2xl' m={10}>
    <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/' onClick={handleLogin}>Sign In</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/' onClick={handleRegister}>Register</BreadcrumbLink>
      </BreadcrumbItem>
      </Breadcrumb>
    </IfNotAuthenticated>
    </Box>
    </>
  )
}

export default Nav
