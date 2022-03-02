import React from 'react'
import SearchBar from './SearchBar'
import { Heading, Text, Grid, GridItem } from '@chakra-ui/react'

export default function LandingPage () {
  return (
    <>
      <Grid
        h='700px'
        templateRows='2fr 1fr'
        templateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
        gap={4}>
        <GridItem colSpan={4} m={10}>
          <Heading as='h1' size='4xl' isTruncated ml={10} mt={20} py={5}>Renter</Heading>
          <Text fontSize='4xl' color='pink' ml={10} py={2}>Live Better.</Text>
          <Text fontSize='2xl' color='blue' ml={10} pr={20}>Learn about your next rental before making the commitment. Find out what you need to know by searching for the address.</Text>
        </GridItem>
        <GridItem colSpan={5}>
          <SearchBar placeholder='Start by typing the address of the rental property...' />
        </GridItem>

        <GridItem colSpan={3} ml={20} mr={15} bg='lavender' borderRadius='15'>
          <Heading as='h2' size='xl' color='pink' m={5}>Step 1</Heading>
          <Text fontSize='xl' color='blue' m={5}>Search your rental by address. If it's not there, sign up or log in to request for it to be added to our database.</Text>
        </GridItem>

        <GridItem colSpan={3} ml={10} mr={10} bg='lavender' borderRadius='15'>
          <Heading as='h2' size='xl' color='pink' m={5}>Step 2</Heading>
          <Text fontSize='xl' color='blue' m={5}>Read reports or add your own. Sign up or log in to add a report</Text>
        </GridItem>
        <GridItem colSpan={3} bg='lavender' ml={15} mr={20} borderRadius='15'>
          <Heading as='h2' size='xl' color='pink' m={5}>Step 3</Heading>
          <Text fontSize='xl' color='blue' m={5}>Rent with confidence and make the world a better place.</Text>
        </GridItem>
      </Grid>
    </>
  )
}
