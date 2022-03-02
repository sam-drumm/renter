import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { Box, Image } from '@chakra-ui/react'

export default function Header () {
  return (
    <>
    <Link to="/">
    <Box boxSize='150px' float='left' ml={10}>
    <Image src='./images/RenterFinal-removebg-preview.png' alt="renterlogo"/>
    </Box>
    </Link>
    <Nav />
    </>
  )
}
