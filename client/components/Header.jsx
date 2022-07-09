import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Breadcrumb, Image, BreadcrumbItem, BreadcrumbLink, useDisclosure, Text, Flex, Box, Stack, Link, Grid, GridItem } from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import { FcCollapse, FcMenu } from 'react-icons/fc'

function Nav () {
  const user = useSelector(state => state.user)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)
  const navigate = useNavigate()

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
      <Link onClick={() => navigate('./')}>
        <Image src='./images/RenterFinal-bgRemoved.png' alt="renterlogo"
          boxSize={{ base: '75', md: '125' }}
        />
      </Link>

      <Stack
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        flexGrow={1}
        direction={{ base: 'column-reverse', md: 'row-reverse' }}
        objectFit='cover'
        width={{ base: 'full', md: 'auto' }}
        mr={3}
      >

        <IfAuthenticated>
          <Grid
            templateRows='repeat(2, .1fr)'
          >
            <GridItem rowSpan={1}>
              <Text fontSize='2xl' color='pink' display='flex'>Welcome {user.nickname}!</Text>
            </GridItem>

            <GridItem rowSpan={1}>
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
            </GridItem>

          </Grid>
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
