import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import WaitIndicator from './WaitIndicator'

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
    <>

      <Box>
        <IfAuthenticated>
          <Text fontSize='2xl' color='pink' display='flex' justifyContent='flex-end' mx={10}>Welcome {user.nickname}!</Text>
          <Breadcrumb color='teal' fontSize='2xl' m={10} display='flex' justifyContent='flex-end' separator={<ChevronRightIcon color='pink' />}>
            <BreadcrumbItem>
              <WaitIndicator/>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/rentalform'>Renter Form</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/' onClick={handleLogoff}>Log out</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Breadcrumb color='teal' fontSize='2xl' m={10} display='flex' justifyContent='flex-end'separator={<ChevronRightIcon color='pink' />}>
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
