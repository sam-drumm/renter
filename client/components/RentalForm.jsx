import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProperty } from '../actions/property'
import { useNavigate } from 'react-router-dom'
import { setWaiting, clearWaiting } from '../actions/waiting'
import AlertMessage from './AlertMessage'
import Footer from './Footer'

function RentalForm () {
  const property = useSelector(state => state.property)
  const token = useSelector(state => state.user.token)
  const auth0Id = useSelector(state => state.user.auth0Id)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    auth0Id: auth0Id,
    address: '',
    rooms1: '-1',
    rooms2: '-1',
    rentTotal: '',
    utilities: '-1',
    years1: '-1',
    years2: '-1',
    managedBy: '-1',
    rentIncrease: '-1',
    aveIncrease: '',
    heatPump: false,
    insulation: false,
    fridge: false,
    oven: false,
    smokeAlarm: false,
    fireExtinguisher: false,
    curtains: false,
    pets: false,
    smoking: false,
    subletting: false,
    repairsResponsive: '-1',
    repairs: '-1',
    notice: '-1',
    relationship: '-1'
  })

  useEffect(() => {
    setForm({
      ...form,
      address: property.address
    })
  }, [property])

  const handleChange = (event) => {
    setForm({
      ...form,
      auth0Id,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit (event) {
    event.preventDefault()
    dispatch(setWaiting())
    setMessage('Your Renter form is being submitted.')
    try {
      await setTimeout(() => {
        dispatch(addProperty(form, token))
        dispatch(clearWaiting())
        navigate('/')
      }, 3500)
    } catch (err) {
      console.error(err)
    }
  }

  return (

    <div className='form-box'>
      <h1>Rental Form</h1>
      <h4 className='form-title'>Please fill in this form to add to the Renter database.</h4>

      <form>
        <fieldset>
          <div className='form-search-bar'>
            <h2>Address:</h2>
          </div>
          <p>Format example: 12 Richmond Road, Ponsonby, Auckland</p>
          <input type="text" cols='10' placeholder="Please enter the rental address" name='address' value={form.address} onChange={handleChange} />

        </fieldset>
        <fieldset>
          <h2>Rental details</h2>
          <label>
            As a tenant, I have rented
          </label>
          <select className='dropbox' name='rooms1' onChange={handleChange} value={form.rooms1}>
            <option value="-1">---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>
            rooms out of
          </label>
          <select className='select' name='rooms2' onChange={handleChange} value={form.rooms2}>
            <option value="-1">---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5 +">5 +</option>
          </select>
          <label>
              rooms in total.
          </label>

          <label>
            <p></p>
            Total rent paid per week $
            <input cols='10' className='text' name='rentTotal' type="number" onChange={handleChange} value={form.rentTotal} />
          </label>
          <label>
            <p></p>
            Did rent include utilities? (e.g. water, power, internet)
          </label>
          <select className='select' name='utilities' onChange={handleChange} value={form.utilities}>
            <option value="-1">---</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label>
            <p></p>
            Length of tenancy
          </label>
          <select className='select' name='years1' onChange={handleChange} value={form.years1}>
            <option value="-1">---</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <label>
            to
          </label>
          <select className='select' name='years2' onChange={handleChange} value={form.years2}>
            <option value="-1">---</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <label>
            <p></p>
            Who was the rental property managed by?
          </label>
          <select className='select' name='managedBy' onChange={handleChange} value={form.managedBy}>
            <option value="-1">---</option>
            <option value="Landlord">Landlord</option>
            <option value="Property Manager">Property Manager</option>
          </select>

          <label>
            <p></p>
            How often did the rent increase?
          </label>
          <select className='select' name='rentIncrease' onChange={handleChange} value={form.rentIncrease}>
            <option value="-1">---</option>
            <option value="Never">Never</option>
            <option value="Once a year">Once a year</option>
            <option value="Twice a year">Twice a year </option>
            <option value="More than twice">More than twice</option>
          </select>
          <label>
            <p></p>
            What was the average rent increase? $
            <input cols='10' name="aveIncrease" type="number" onChange={handleChange} value={form.aveIncrease} />
          </label>
        </fieldset>
        <fieldset>
          <h2>Amenities</h2>
          <ul>
            <li>
              <label>
                <input type="checkbox" name="heatPump" onChange={handleChange} value={form.heatPump} />
                Heat Pump
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="insulation" onChange={handleChange} value={form.insulation} />
                Insulation
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="fridge" onChange={handleChange} value={form.fridge} />
                Fridge
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="oven" onChange={handleChange} value={form.oven} />
                Oven
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="smokeAlarm" onChange={handleChange} value={form.smokeAlarm} />
                Smoke Alarm
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="fireExtinguisher" onChange={handleChange} value={form.fireExtinguisher} />
                Fire extinguisher
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="curtains" onChange={handleChange} value={form.curtains} />
                Curtains in bedroom
              </label>
            </li>
          </ul>
          <h3>Additional terms</h3>
          <ul>
            <li>

              <label>
                <input type="checkbox" name="pets" onChange={handleChange} value={form.pets} />
                Pets OK
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="smoking" onChange={handleChange} value={form.smoking} />
                Smoking OK
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="subletting" onChange={handleChange} value={form.subletting} />
                Subletting OK
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <h3>Relationship with landlord/property manager</h3>
          <label>
            <p></p>
            How responsive was the landlord/property manager to repairs?
          </label>
          <select className='select' name='repairsResponsive' onChange={handleChange} value={form.repairsResponsive}>
            <option value="-1">---</option>
            <option value="Very responsive">Very responsive</option>
            <option value="Somewhat responsive">Somewhat responsive</option>
            <option value="Occasionally responsive">Occasionally responsive</option>
            <option value="Rarely responsive">Rarely responsive</option>
            <option value="Never responsive">Never responsive</option>
          </select>

          <label>
            <p></p>
            How were repairs conducted?
          </label>
          <select className='select' name='repairs' onChange={handleChange} value={form.repairs}>
            <option value="-1">---</option>
            <option value="By contractor">By contractor</option>
            <option value="By landlord">By landlord</option>
            <option value="Not at all">Not at all</option>
          </select>
          <label>
            <p></p>
            Were tenants provided sufficient notice before Landlord/Property Manager arrived at the property?
          </label>
          <select className='select' name='notice' onChange={handleChange} value={form.notice}>
            <option value="-1">---</option>
            <option value="Always">Always</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
          <label>
            <p></p>
            Rate your relationship with the Landlord/Property Manager?
          </label>
          <select className='select' name='relationship' onChange={handleChange} value={form.relationship}>
            <option value="-1">---</option>
            <option value="Positive">Positive</option>
            <option value="Somewhat positive">Somewhat positive</option>
            <option value="Neutral">Neutral</option>
            <option value="Somewhat negative">Somewhat negative</option>
            <option value="Negative">Negative</option>
          </select>
        </fieldset>
        <div>
          {message && <AlertMessage message={message} />}
        </div>
        <button className='button' onClick={handleSubmit}>
        Submit
        </button>
      </form>

      <div className='disclaimer'>
        Disclaimer:
        <p>Length of tenancy is for internal use only to verify that the data remains up to date and within the last 5 years</p>
      </div>

      <Footer/>
    </div>
    
  )
}

export default RentalForm
