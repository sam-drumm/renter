import React from 'react'
// 1. import `extendTheme` function
import { extendTheme, useColorMode, Button, Box } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

// 3. extend the theme
const theme = extendTheme({ config })

export function Example () {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box pos="absolute" top="150" left="1750">
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}

export default theme
