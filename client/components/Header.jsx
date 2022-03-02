import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import WaitIndicator from './WaitIndicator'
import { Box, Image } from '@chakra-ui/react'

export default function Header () {
  return (
    <header>
      <Box boxSize='sm'>
        <Link to="/">
        <Image src='./images/RenterFinal-removebg-preview.png' alt="renterlogo"/>
        </Link>
        </Box>
        <WaitIndicator />
        <Nav />
    </header>
  )
}
