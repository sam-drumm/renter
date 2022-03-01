import React from 'react'
import SearchBar from './SearchBar'
import { Button, Heading, Text, Grid, GridItem, Box } from '@chakra-ui/react'



export default function LandingPage () {
  return (
      <>
      <Grid
        h='700px'
        templateRows='2fr 1fr'
        templateColumns='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
        gap={4}>
        <GridItem colSpan={5}> 
        <Heading  as='h1' size='4xl' isTruncated>Renter</Heading>
          <Text fontSize='4xl' color='pink'>Live Better</Text>
          <Text fontSize='2xl' color='blue'>Learn about your next rental before making the commitment. Find out what you need to know by searching for the address.</Text>
        </GridItem>
        <GridItem colSpan={4}>
        <SearchBar placeholder='Start by typing the address of the rental property...' />
        </GridItem>
        <GridItem colSpan={3}>
        <Heading as='h2' size='xl' color='pink'>Step 1</Heading>
                <Text fontSize='xl' color='blue'>Search your rental by address. If it's not there, sign up or log in to request for it to be added to our database.</Text>
        </GridItem>

        <GridItem colSpan={3}>
        <Heading as='h2' size='xl' color='pink'>Step 2</Heading>
                <Text fontSize='xl' color='blue'>Read reports or add your own. Sign up or log in to <br/>
                <Button colorScheme='blue'>Add a report</Button></Text>
        </GridItem>
        <GridItem colSpan={3}>
        <Heading as='h2' size='xl' color='pink'>Step 3</Heading>
                <Text fontSize='xl' color='blue'>Rent with confidence and make the world a better place.</Text>
        </GridItem>
        </Grid>
      </>
  )
}
