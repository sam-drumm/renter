import { extendTheme } from '@chakra-ui/react'

const renterTheme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    blue: '#101935',
    pink: '#F92A82',
    lavender: '#D1D2F9',
    teal: '#03989E',
    yellow: '#FFBC42',
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923'
    }
    // ...
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em'
  }

})

export default renterTheme
