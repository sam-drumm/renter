import React from 'react'
import { Text, Box } from '@chakra-ui/react'
 
export default function Footer () {
  return (
    <footer>
    <Box bg='#F3F5F5'>
     <Text mx={10} mt={10} fontSize='sm'>General disclaimer: This is a public forum presenting user opinions on selected rental properties, and as such the views expressed are the subjective views of the Renter users and do not reflect the views or opinions of Renter. All third party trademarks, images and copyrights on this Site are used for the purposes of comparative advertising, criticism or review.</Text>
     <Text mx={10} fontSize='sm'>Copyright 2022 Renter. All Rights Reserved.</Text>
     </Box>
    </footer>
  )
}
