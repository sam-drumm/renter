import React from 'react'
import Logo from './Logo'
import NavBarContainer from './NavBarContainer'
import { ChakraProvider } from '@chakra-ui/react'
import myNewTheme from '../../styles/theme'

export default function NavBar (props) {
  return (
    <>
      <ChakraProvider theme={myNewTheme}>
        <NavBarContainer {...props}>
          <Logo
            w="150px"
            color={['purple', 'grey', 'primary.500', 'primary.500']}
          />
        </NavBarContainer>
      </ChakraProvider>
    </>
  )
}
