import React from 'react'
import { Text, Box } from '@chakra-ui/react'

export default function Footer () {
  return (
    <footer>
      <Box bg='#F3F5F5' mt={5}>
        <Text mx={10} mt={20} fontSize='sm'>Disclaimer: Renter is a public forum presenting user opinions on selected rental properties. Views expressed are those belonging to Renter users and do not reflect the views or opinions of Renter Inc. </Text>
        <Text mx={10} fontSize='sm'>Copyright © 2022 Renter Inc. All rights reserved. 602-05022-A</Text>
      </Box>
    </footer>
  )
}
