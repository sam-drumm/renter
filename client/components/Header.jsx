import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { Box } from '@chakra-ui/react'

export default function Header () {
  return (
    <>
      <Link to="/">
        <img src='./images/RenterFinal-bgRemoved.png' alt="renterlogo" className='logo'/>
      </Link>
      <Nav />
      <Box mb={140}></Box>
    </>
  )
}
