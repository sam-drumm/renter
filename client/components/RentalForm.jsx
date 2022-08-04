import React from 'react'
import { useSelector } from 'react-redux'
// import { addProperty } from '../actions/property'
// import { useNavigate } from 'react-router-dom'
// import { setWaiting, clearWaiting } from '../actions/waiting'
// import AlertMessage from './AlertMessage'
// import Footer from './Footer'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Radio,
  RadioGroup,
  Stack,
  CheckboxGroup,
  Checkbox,
  Button,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  address: Yup.string()
    .min(3, 'This must be at least 3 characters long')
    .max(50, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  roomsRented: Yup.number()
    .min(1, 'This must be at least 3 characters long')
    .max(5, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  roomsTotal: Yup.number()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  rentTotal: Yup.number()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  startYear: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  endYear: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  managed: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  rentIncrease: Yup.number()
    .min(1, 'This must be at least 3 characters long')
    .max(1000, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  averageIncrease: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  amenities: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  specialTerms: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  repairs: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  notice: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  relationship: Yup.string()
    .min(1, 'This must be at least 3 characters long')
    .max(54, 'Sorry, this must be under 50 characters long')
    .required('Required')
})

function RentalForm () {
  // const property = useSelector(state => state.property)
  // const token = useSelector(state => state.user.token)
  const auth0Id = useSelector(state => state.user.auth0Id)

  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const [message, setMessage] = useState('')

  const formik = useFormik({
    initialValues: {
      address: '',
      roomsRented: '',
      roomsTotal: '',
      rentTotal: '',
      utilities: '',
      startYear: '',
      endYear: '',
      managed: '',
      rentIncrease: '',
      averageIncrease: '',
      amenities: [],
      specialTerms: [],
      // heatPump: false,
      // insulation: false,
      // fridge: false,
      // oven: false,
      // smokeAlarm: false,
      // fireExtinguisher: false,
      // curtains: false,

      repairs: '',
      notice: '',
      relationship: ''
    },
    validationSchema: registerSchema

  })

  // useEffect(() => {
  //   setForm({
  //     ...form,
  //     address: property.address
  //   })
  // }, [property])

  // const handleChange = (event) => {
  //   setForm({
  //     ...form,
  //     auth0Id,
  //     [event.target.name]: event.target.value
  //   })
  // }

  // async function handleSubmit (event) {
  //   event.preventDefault()
  //   dispatch(setWaiting())
  //   setMessage('Your Renter form is being submitted.')
  //   try {
  //     await setTimeout(() => {
  //       dispatch(addProperty(form, token))
  //       dispatch(clearWaiting())
  //       navigate('/')
  //     }, 3500)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  return (

    <div className='form-box'>

      <h1>Add a Rental Property</h1>
      <h4>Please fill in this form to add to the Renter database.</h4>

      <form onSubmit={formik.handleSubmit}>

        <FormControl isInvalid={formik.errors.address}>
          <FormLabel>
            <Input
              type="text"
              id="address"
              placeholder="Please search for the property address"
              {...formik.getFieldProps('address')}
            />
          </FormLabel>
          <FormErrorMessage>{formik.touched.address && formik.errors.address}</FormErrorMessage>
        </FormControl>

        <h2>Property details</h2>
        <Stack direction={['column', 'row']} width="75%">

          <FormControl>
            <FormLabel>I rent
              <Select
                id='roomsRented'
                {...formik.getFieldProps('roomsRented')}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </FormLabel>
          </FormControl>

          <FormControl>
            <FormLabel>out of
              <Select
                id='roomsTotal'
                {...formik.getFieldProps('roomsTotal')}
              >
                <option value="">---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
              <label>
              rooms in the house.
              </label>
            </FormLabel>
          </FormControl>
        </Stack>

        <FormControl isInvalid={formik.errors.rentTotal}>
          <FormLabel>Rent per week:
            <InputGroup>
              <InputLeftAddon children='$'/>
              <Input
                id='rentTotal'
                type='number'
                placeholder='Enter the rent you pay'
                {...formik.getFieldProps('rentTotal')}
              />
            </InputGroup>
          </FormLabel>
          <FormErrorMessage>{formik.touched.rentTotal && formik.errors.rentTotal}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Did rent include utilities? (e.g. water, power, internet)
            <RadioGroup
              id='utilities'
              {...formik.getFieldProps('utilities')}
            >
              <Stack direction={['column', 'row']}>
                <Radio value='0'>No</Radio>
                <Radio value='1'>Yes</Radio>
              </Stack>

            </RadioGroup>
          </FormLabel>
        </FormControl>

        <label>
            Length of tenancy
        </label>

        <Stack direction={['column', 'row']} width="75%">

          <FormControl>
            <FormLabel>Started in
              <Select
                id='startYear'
                {...formik.getFieldProps('startYear')}
              >
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </Select>
            </FormLabel>
          </FormControl>

          <FormControl>
            <FormLabel>till
              <Select
                id='endYear'
                {...formik.getFieldProps('endYear')}
              >
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </Select>
            </FormLabel>
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel>Who was the rental property managed by?
            <RadioGroup
              id='managed'
              {...formik.getFieldProps('managed')}
            >
              <Stack direction={['column', 'row']}>
                <Radio value='0'>Direct (owner/landlord)</Radio>
                <Radio value='1'>Property Manager</Radio>
              </Stack>

            </RadioGroup>
          </FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel>How often was the rent increased?
            <Select

              id='rentIncrease'
              {...formik.getFieldProps('rentIncrease')}
            >
              <option value="0">Never</option>
              <option value="1">Once a year</option>
              <option value="2">Twice a year </option>
              <option value="3">More than twice</option>
            </Select>
          </FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel>Average rent increase:
            <InputGroup>
              <InputLeftAddon children='$'/>
              <Input
                id='averageIncrease'
                type='number'
                {...formik.getFieldProps('averageIncrease')}
              />
            </InputGroup>
          </FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel> Amenities
            <CheckboxGroup>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox value='heatPump' {...formik.getFieldProps('amenities')}>
              Heat Pump
                </Checkbox>
                <Checkbox value='heatPump' {...formik.getFieldProps('amenities')}>
              Heat Pump
                </Checkbox>
                <Checkbox value='mole' {...formik.getFieldProps('amenities')}>
              mole
                </Checkbox>
                <Checkbox value='curry' {...formik.getFieldProps('amenities')}>
              curry
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormLabel>
        </FormControl>

        {/*
          <li>
            <label>
              <Field type="checkbox" name="amenities" value='heatPump'/>
                Heat Pump
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="amenities" value='insulation'/>
                Insulation
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="amenities" value='fridge'/>
                Fridge
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="amenities" value='oven'/>
                Oven
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="amenities" value='smokeAlarm'/>
                Smoke Alarm
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="amenities" value='fireExtinguisher'/>
                Fire Extinguisher
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="amenities" value='curtains'/>
                curtains
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="amenities" value='Smoke Alarm'/>
                Smoke Alarm
            </label>
          </li>
        </ul>

        <h3>Additional terms</h3>
        <ul>
          <li>
            <label>
              <Field type="checkbox" name="specialTerms" value='smoking'/>
                Smoking
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="specialTerms" value='pets'/>
                Pets
            </label>
          </li>

          <li>
            <label>
              <Field type="checkbox" name="specialTerms" value='subletting'/>
                Subletting
            </label>
          </li>
        </ul> */}

        <h3>Relationship with landlord/property manager</h3>

        <FormControl>
          <FormLabel> How responsive was the landlord/property manager to repairs?

            <Select
              id='repairs'
              {...formik.getFieldProps('repairs')}
            >
              <option value="Very responsive">Very responsive</option>
              <option value="Somewhat responsive">Somewhat responsive</option>
              <option value="Occasionally responsive">Occasionally responsive</option>
              <option value="Rarely responsive">Rarely responsive</option>
              <option value="Never responsive">Never responsive</option>
            </Select>
          </FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel> Were tenants provided sufficient notice before Landlord/Property Manager arrived at the property?

            <Select
              id='notice'
              {...formik.getFieldProps('notice')}
            >
              <option value="Always">Always</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </Select>
          </FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel>Rate your relationship with the Landlord/Property Manager?

            <Select
              id='relationship'
              {...formik.getFieldProps('relationship')}
            >

              <option value="Positive">Positive</option>
              <option value="Somewhat positive">Somewhat positive</option>
              <option value="Neutral">Neutral</option>
              <option value="Somewhat negative">Somewhat negative</option>
              <option value="Negative">Negative</option>
            </Select>
          </FormLabel>
        </FormControl>

        <Button className='submit'>
        Submit
        </Button>
      </form>
    </div>

  )
}

export default RentalForm
