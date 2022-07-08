import React from 'react'
import SearchBar from './SearchBar'
import { Heading, Text, Grid, GridItem } from '@chakra-ui/react'

export default function LandingPage () {
  return (

    <Grid
      h='700px'
      templateRows='repeat (3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
      m={{ base: '4', md: '10' }}
    >

      <GridItem rowSpan={1} colSpan={4}>
        <Heading as='h1' size='4xl' isTruncated py={5}>Renter</Heading>
        <Text fontSize='4xl' color='pink' py={2}>Live Better.</Text>
        <Text fontSize='2xl' color='blue'>Learn about your next rental before making a commitment. Find out what you need to know by searching the Renter database.</Text>
      </GridItem>

      <GridItem rowSpan={2} colSpan={4} m={2} p={2}>
        <SearchBar/>
      </GridItem>

      <GridItem rowSpan={3} colSpan={1} bg='lavender' borderRadius='15'>
        <Heading as='h2' size='xl' color='pink' m={5}>1</Heading>
        <Text fontSize='xl' color='blue' m={2}>Search Renter reports by address.</Text>
      </GridItem>

      <GridItem rowSpan={3} colSpan={1} bg='lavender' borderRadius='15'>
        <Heading as='h2' size='xl' color='pink' m={5}>2</Heading>
        <Text fontSize='xl' color='blue' m={2}>Sign in or register to submit a Renter form to our database for a new or an existing address.</Text>
      </GridItem>

      <GridItem rowSpan={3} colSpan={1} bg='lavender' borderRadius='15'>
        <Heading as='h2' size='xl' color='pink' m={5}>3</Heading>
        <Text fontSize='xl' color='blue' m={2}>Rent with confidence and make the world a better place.</Text>
      </GridItem>

    </Grid>

  )
}
