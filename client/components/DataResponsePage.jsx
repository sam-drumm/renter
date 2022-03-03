import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProperties } from '../actions/property'
import { getUsers } from '../apis/users'
import { getLoginFn, getRegisterFn } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Box, Text, Heading, List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home'

function DataResponsePage (props) {
  const { address } = useParams()
  const dispatch = useDispatch()

  const login = getLoginFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  const properties = useSelector(state => state.properties)
  useEffect(() => {
    dispatch(fetchProperties(address))
  }, [])

  const [nickname, setNickname] = useState([])
  // const user = useSelector(state => state.user)
  useEffect(() => {
    getUsers()
      .then(res => {
        setNickname(res)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  function handleLogin (event) {
    event.preventDefault()
    login()
  }

  return (
    <Box ml={20} mt={30}>

      {properties.length > 0
        ? <Box> {console.log(properties)}
          {properties.map(property =>
            <Box key={property.id} mt={30}>
              <Heading as='h2' size='2xl' color='blue' mb={4} mt={30} >Search results</Heading>

              <Heading as='h3' size='xl' color='teal' mb={4}>Rental Details:</Heading>
              <Text fontSize='xl'>
              Address:  {property.address}. <br/>
              The tenant rented {property.rooms_1} out of {property.rooms_2} rooms in total. <br/>
              Total rent paid per week ${property.rent_total}.<br/>
              Were utilities included in the rent (e.g. water, power, internet)?  {property.utilities.charAt(0).toUpperCase() + property.utilities.slice(1)}. <br/>
              The rental property was managed by:  {property.property_managed_by}. <br/>
              Annual frequency of rent increase: {property.rent_increase}. <br/>
              The average rent increase was ${property.ave_increase}.
              </Text>
              <br>
              </br>
              <Heading as='h3' size='lg' color='blue' mb={4}>Amenities:</Heading>
              <List fontSize='xl'>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
                Heat pump: {property.heat_pump ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
               Insulation:  {property.insulation ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
                Fridge:   {property.fridge ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
                Curtains in the bedroom: {property.curtains ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
                 Oven:  {property.oven ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
                Smoke alarm: {property.smoke_alarm ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
                 Fire extinguisher: {property.fire_extinguisher ? 'Yes' : 'No'}
                </ListItem>
              </List>
              <Heading as='h3' size='lg' color='blue' mb={4}mt={4}>Additional terms:</Heading>
              <List fontSize='xl'>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
               Pets OK:  {property.pets_ok ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
                Smoking OK: {property.smoking_ok ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <ListIcon as={HomeIcon} color='pink' />
                 Subletting OK: {property.subletting_allowed ? 'Yes' : 'No'}
                </ListItem>
              </List>
              <br>
              </br>
              <Heading as='h3' size='lg' color='blue' mb={4}mt={4}>Relationship with Landlord/Property Manager:</Heading>
              <Text fontSize='xl'>
              Landlord/Property Manager was {property.responsive_repairs.charAt(0).toLowerCase() + property.responsive_repairs.slice(1)} to repairs. <br/>

              Repairs were conducted by the {property.repairs}. <br/>

              Sufficient notice was {property.sufficient_notice.charAt(0).toLowerCase() + property.sufficient_notice.slice(1)} provided by landlord/property manager before arriving at the property.<br/>

               Relationship with the landlord/property manager was rated: {property.rate_relationship} <br/>
              </Text>
              <br/>
              <Text fontSize='xl' as='em' mt={5} mb={5} color='blue'>
                This post was created by: {nickname.filter(name => name.auth0_id === property.user_id).map(name => name.nickname)
                }
              </Text>
            </Box>
          )}

        </Box>

        : <Box>
          <Text>There are no properties that match the address you have searched for.
If you are a previous tenant at this address, please
          <a href='/' onClick={handleLogin} className='nav-link'>Sign in</a>
                /
          <a href='/' onClick={handleRegister} className='nav-link'>Register</a>
          </Text>
        </Box>
      }

    </Box>
  )
}

export default DataResponsePage
