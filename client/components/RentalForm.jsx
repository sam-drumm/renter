import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProperty } from '../actions/property'
import { useHistory } from 'react-router'
// import { useNavigate } from 'react-router-dom'

function RentalForm () {
  const property = useSelector(state => state.property)
  const dispatch = useDispatch()
  const history = useHistory()

  const [form, setForm] = useState({
    addressAPI: '',
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
    repairsConducted: '-1',
    notice: '-1',
    relationship: '-1'
  })

  useEffect(() => {
    setForm({
      addressAPI: property.addressAPI
    })
  }, [property])

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit (event) {
    event.preventDefault()
    try {
      console.log('hey sam, here is your form for dispatch', form)
      dispatch(addProperty(form))
      history.push('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (

    <div className='form-wrapper'>
      <h1>Rental Form</h1>
      <p>Please fill in this form to add your renting experience to the site</p>
      <form>
        <fieldset>
          <label htmlFor='auth0Id'>auth0Id</label>
          <label>
            Address
          </label>
          <input type="text" placeholder="address api" value={form.addressAPI} onChange={handleChange} disabled={true}/>
        </fieldset>
        <fieldset>
          <h2>Rental details</h2>
          <label>
            As a tenant, I have rented
          </label>
          <select className='' name='rooms1' onChange={handleChange} value={form.rooms1}>
            <option value="-1">---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>
            out of
          </label>
          <select className='' name='rooms2' onChange={handleChange} value={form.rooms2}>
            <option value="-1">---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5 +">5 +</option>
          </select>
          <label>
              in total.
          </label>

          <label>
            <p></p>
            Rent paid in total $
            <input cols='10' className='' name='rentTotal' type="number" onChange={handleChange} value={form.rentTotal} />
          </label>
          <label>
            <p></p>
            Did rent include utilities?
          </label>
          <select className='' name='utilities' onChange={handleChange} value={form.utilities}>
            <option value="-1">---</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label>
            <p></p>
            Length of tenancy
          </label>
          <select className='' name='years1' onChange={handleChange} value={form.years1}>
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
          <select className='' name='years2' onChange={handleChange} value={form.years2}>
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
          <select className='' name='managedBy' onChange={handleChange} value={form.managedBy}>
            <option value="-1">---</option>
            <option value="Landlord">Landlord</option>
            <option value="Property Manager">Property Manager</option>
          </select>

          <label>
            <p></p>
            How often did the rent increase?
          </label>
          <select className='' name='rentIncrease' onChange={handleChange} value={form.rentIncrease}>
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
          <label>
            Heat Pump
            <input type="checkbox" name="heatPump" onChange={handleChange} value={form.heatPump} />
          </label>
          <label>
            Insulation
            <input type="checkbox" name="insulation" onChange={handleChange} value={form.insulation} />
          </label>
          <label>
            Fridge
            <input type="checkbox" name="fridge" onChange={handleChange} value={form.fridge} />
          </label>
          <label>
            Oven
            <input type="checkbox" name="Oven" onChange={handleChange} value={form.oven} />
          </label>
          <label>
            Smoke Alarm
            <input type="checkbox" name="smokeAlarm" onChange={handleChange} value={form.smokeAlarm} />
          </label>
          <label>
            Fire extinguisher
            <input type="checkbox" name="fireExtinguisher" onChange={handleChange} value={form.fireExtinguisher} />
          </label>
          <label>
            Curtains in bedroom
            <input type="checkbox" name="curtains" onChange={handleChange} value={form.curtains} />
          </label>
          <label>
            Pets OK
            <input type="checkbox" name="pets" onChange={handleChange} value={form.pets} />
          </label>
          <label>
            Smoking OK
            <input type="checkbox" name="smoking" onChange={handleChange} value={form.smoking} />
          </label>
          <label>
            Subletting OK
            <input type="checkbox" name="subletting" onChange={handleChange} value={form.subletting} />
          </label>
        </fieldset>
        <fieldset>
          <h2>Relationship with landlord/property manager</h2>
          <label>
            <p></p>
            How responsive was the landlord/property manager to repairs?
          </label>
          <select className='' name='repairsResponsive' onChange={handleChange} value={form.repairsResponsive}>
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
          <select className='' name='repairsConducted' onChange={handleChange} value={form.repairsConducted}>
            <option value="-1">---</option>
            <option value="By contractor">By contractor</option>
            <option value="By landlord">By landlord</option>
            <option value="Not at all">Not at all</option>
          </select>
          <label>
            <p></p>
            Were tenants provided sufficient notice before Landlord/Property Manager arrived at property?
          </label>
          <select className='' name='notice' onChange={handleChange} value={form.notice}>
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
          <select className='' name='relationship' onChange={handleChange} value={form.relationship}>
            <option value="-1">---</option>
            <option value="Positive">Positive</option>
            <option value="Somewhat positive">Somewhat positive</option>
            <option value="Neutral">Neutral</option>
            <option value="Somewhat negative">Somewhat negative</option>
            <option value="Negative">Negative</option>
          </select>
        </fieldset>

      </form>
      <button className='button' onClick={handleSubmit}>Submit</button>
    </div>

  )
}

export default RentalForm
