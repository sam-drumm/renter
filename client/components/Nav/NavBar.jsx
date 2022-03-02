import React from 'react'
import Logo from './Logo'
import NavBarContainer from './NavBarContainer'

export default function NavBar (props) {
  return (
    <>
      <p>Hi</p>
      <NavBarContainer {...props}>
        <Logo
          w="100px"
          color={['purple', 'grey', 'primary.500', 'primary.500']}
        />
      </NavBarContainer>
    </>
  )
}
