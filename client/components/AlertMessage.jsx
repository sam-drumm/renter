import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import WaitIndicator from './WaitIndicator'

export default function AlertMessage ({ message }) {
  return (

    <Alert
      status='success'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
   Thanks for contributing!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        {message}
      </AlertDescription>
      <WaitIndicator/>
    </Alert>

  )
}
