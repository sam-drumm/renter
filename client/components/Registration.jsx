import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../apis/users'
import { setWaiting, clearWaiting } from '../actions/waiting'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

export default function Registration () {
  const { auth0Id, email } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nickname, setNickname] = useState('')

  const form = ({
    nickname,
    auth0Id,
    email
  }
  )

  async function handleClick (e) {
    e.preventDefault()
    try {
      await addUser(form)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('lavender', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Register Profile</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            <Link color={'blue.400'}></Link>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>

          <Stack spacing={4}>
            <FormControl id="auth0Id">
              <FormLabel>Auth0Id</FormLabel>
              <Input type="auth0Id"
                name='auth0Id'
                value={auth0Id}
                disabled={true}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email </FormLabel>
              <Input type="email"
                name='email'
                value={email}
                disabled={true}
              />
            </FormControl>

            <FormControl id="nickname">
              <FormLabel>Nickname</FormLabel>
              <Input type="Nickname"
                name='nickname'
                onChange={(e) => setNickname(e.target.value)}
              />

            </FormControl>
            <Stack spacing={10}>

              <Button
                type='button'
                onClick={handleClick}
                bg={'teal'}
                color={'black'}
                _hover={{
                  bg: 'blue.500'
                }}>
                Register
              </Button>
            </Stack>
          </Stack>
          <p>Please note: your nickname is posted as the author of the Renter form.</p>
        </Box>
      </Stack>
    </Flex>
  )
}
