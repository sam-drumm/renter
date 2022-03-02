import React from 'react'
import { Box } from '@chakra-ui/react'

export default function Logo (props) {
  return (
    <Box {...props}>
      <img src='./images/NewRenterLogo.png' alt="renterlogo" className='logo' />
    </Box>
  )
}
