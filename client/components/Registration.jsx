import React, { useEffect, useState } from 'react'
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
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

export default function Registration () {
  const user = useSelector(state => state.user)
  const history = useNavigate()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    auth0Id: '',
    name: '',
    email: '',
    description: ''
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      name: user.name,
      email: user.email,
      description: user.description
    })
  }, [user])

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleClick (e) {
    e.preventDefault()
    dispatch(setWaiting())
    // registerUser(form, authUser, history.push)
    try {
      await setTimeout(() => {
        addUser(form)
        history('/rentalform')
        dispatch(clearWaiting())
      }, 500)
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
                value={form.auth0Id}
                onChange={handleChange}
                disabled={true}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email </FormLabel>
              <Input type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                disable={true}
              />
            </FormControl>

            <FormControl id="nickname">
              <FormLabel>Nickname</FormLabel>
              <Input type="Nickname"
                name='nickname'
                value={form.nickname}
                onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
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
