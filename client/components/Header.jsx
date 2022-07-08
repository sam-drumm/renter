import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, Image, BreadcrumbItem, BreadcrumbLink, useDisclosure, Text, Flex, Box, Stack } from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import { FcCollapse, FcMenu } from 'react-icons/fc'

function Nav () {
  const user = useSelector(state => state.user)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())
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

    <Flex
      position={'sticky'}
    >
      <Image src='./images/RenterFinal-bgRemoved.png' alt="renterlogo" boxSize='150px'/>

      <Stack
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        flexGrow={1}
        direction={{ base: 'column-reverse', md: 'row-reverse' }}
        width={{ base: 'full', md: 'auto' }}
      >

        <IfAuthenticated>
          <Text fontSize='2xl' color='pink' display='flex' mx={10}>Welcome {user.nickname}!</Text>

          <Breadcrumb color='teal' fontSize='2xl' separator={<BiChevronRight color='pink' />}
          >
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
          <Breadcrumb color='teal' fontSize='2xl' m={10} separator={<BiChevronRight color='pink' />}>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/' onClick={handleLogin}>Sign In</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/' onClick={handleRegister}>Register</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </IfNotAuthenticated>

      </Stack>

      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={handleToggle}

      >
        {isOpen
          ? <FcCollapse
            size={'2em'}
          />
          : <FcMenu size={'2em'}/>
        }
      </Box>
    </Flex>

  )
}

export default Nav
