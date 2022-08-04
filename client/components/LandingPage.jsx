import React from 'react'
import SearchBar from './SearchBar'
import { Heading, Text, Grid, GridItem } from '@chakra-ui/react'

const styles = {
  feature: {
    bg: 'lavender',
    borderRadius: '15'
  }
}

export default function LandingPage () {
  return (
    <Grid
      gap= '4'
      m= {{ base: '4', md: '50' }}
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      templateRows={{ base: 'repeat(6, 1fr)', md: 'repeat(8, 1fr)' }}
    >
      <GridItem
        colSpan= {{ base: '1', md: '3' }}
        rowSpan= {{ base: '2', md: '4' }}
      >
        <Heading as='h1' size='4xl' isTruncated py={5}>Renter</Heading>
        <Text fontSize='4xl' color='pink' py={2}>Live Better.</Text>
        <Text fontSize='2xl' color='blue'>Learn about your next rental before making a commitment. Find out what you need to know by searching the Renter database.</Text>
      </GridItem>

      <GridItem
        // rowSpan= '1'
        // colSpan='3'
        rowSpan= {{ base: '1', md: '1' }}
        colSpan= {{ base: '1', md: '3' }}
        // m={2} p={2}

      >
        <SearchBar/>
      </GridItem>

      <GridItem
        rowSpan= {{ base: '1', md: '3' }}
        colSpan= {{ base: '1', md: '1' }}

        sx={styles.feature}
      >
        <Heading as='h2' size='xl' color='pink' m={5}>1</Heading>
        <Text fontSize='xl' color='blue' m={2}>Search Renter reports by address.</Text>
      </GridItem>

      <GridItem
        rowSpan= {{ base: '1', md: '3' }}
        colSpan= {{ base: '1', md: '1' }}
        sx={styles.feature}>
        <Heading as='h2' size='xl' color='pink' m={5}>2</Heading>
        <Text fontSize='xl' color='blue' m={2}>Sign in or register to submit a Renter form to our database for a new or an existing address.</Text>
      </GridItem>

      <GridItem
        rowSpan= {{ base: '1', md: '3' }}
        colSpan= {{ base: '1', md: '1' }}
        // colSpan='3'
        sx={styles.feature}>
        <Heading as='h2' size='xl' color='pink' m={5}>3</Heading>
        <Text fontSize='xl' color='blue' m={2}>Rent with confidence and make the world a better place.</Text>
      </GridItem>

    </Grid>

  )
}
