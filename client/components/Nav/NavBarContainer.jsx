import React from 'react'
import { Flex } from '@chakra-ui/react'
import MenuItem from './MenuItem'

export default function NavBarContainer ({ children, ...props }) {
  return (
    <Flex
      as="nav"
      align="centre"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'Blue', 'Teal']}
      color={['magenta', 'blue', 'primary.700', 'primary.700']}
      {...props}
    >

      <MenuItem to="/">Sign in</MenuItem>
      <MenuItem to="/how">Register</MenuItem>

      {children}
    </Flex>
  )
}
