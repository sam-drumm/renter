import React from 'react'
import { Text, Box } from '@chakra-ui/react'

export default function Footer () {
  return (
    <Box as='footer' bg='#F3F5F5' position='fixed' bottom={0} width={'full'} p={{ base: '2', md: '1' }}>
      <Text
        fontSize={{ base: 'x-small', md: 'sm' }}
      >Disclaimer: Renter is a public forum presenting user opinions on selected rental properties. Views expressed are those belonging to Renter users and do not reflect the views or opinions of Renter Inc. </Text>
      <Text
        fontSize={{ base: 'x-small', md: 'sm' }}
      >Copyright © 2022 Renter Inc. All rights reserved. 602-05022-A</Text>
    </Box>

  )
}
