import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getReports, postReports } from '../apis/reports'

function rentalForm() {


  const initialState = {
    rooms1: '-1',
    rooms2: '-1'
  }

  const [form, setForm] = useState(initialState)

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    postReports(form)
      .then(() => {

        return null
      })
      .catch((err) => {
        console.error('error cannot post rentalForm', err)
      })
  }


  return (

    <div className='form-wrapper'>
      <h1>Rental Form</h1>
      <p>Please fill in this form to add your renting experience to the site</p>
      <form>
        <fieldset>
          <label>
            Address
          </label>
          <input type="text" placeholder="address api" value="address api" />
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
          <select className='' name='rooms1' onChange={handleChange} value={form.rooms2}>
            <option value="-1">---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <label>
              in total.
            </label>
          </select>

          <label>
            <p></p>
            Rent paid in total $
            <input cols='10' name="rentTotal" type="number" />
          </label>
          <label>
            <p></p>
            Did rent include utilities?
          </label>
          <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label>
            <p></p>
            Length of tenancy
          </label>
          <select>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <label>
            to
          </label>
          <select>
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
          <select>
            <option value="landlord">Landlord</option>
            <option value=''>Property Manager</option>
          </select>

          <label>
            <p></p>
            How often did the rent increase?
          </label>
          <select>
            <option value="">Never</option>
            <option value="">Once a year</option>
            <option value="">Twice a year </option>
            <option value="">More than twice</option>
          </select>
          <label>
            <p></p>
            What was the average rent increase? $
            <input cols='10' name="rentIncrease" type="number" />
          </label>
        </fieldset>
        <fieldset>
          <h2>Amenities</h2>
          <label>
            Heat Pump
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Insulation
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Fridge
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Oven
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Smoke Alarm
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Fire extinguisher
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Curtains in bedroom
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Pets OK
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Smoking OK
            <input type="checkbox" checked={true || false} />
          </label>
          <label>
            Subletting OK
            <input type="checkbox" checked={true || false} />
          </label>
        </fieldset>
        <fieldset>
          <h2>Relationship with landlord/property manager</h2>
          <label>
            <p></p>
            How responsive was the landlord/property manager to repairs?
          </label>
          <select>
            <option value="">Very responsive</option>
            <option value="">Somewhat responsive</option>
            <option value="">Occasionally responsive</option>
            <option value="">Rarely responsive</option>
            <option value="">Never responsive</option>
          </select>

          <label>
            <p></p>
            How were repairs conducted?
          </label>
          <select>
            <option value="">By contractor</option>
            <option value="">By landlord</option>
            <option value="">Not at all</option>
          </select>
          <label>
            <p></p>
            Were tenants provided sufficient notice before landlord/property manager arrived at property?
          </label>
          <select>
            <option value="">Always</option>
            <option value="">Sometimes</option>
            <option value="">Occasionally</option>
            <option value="">Rarely</option>
            <option value="">Never</option>
          </select>
          <label>
            <p></p>
            Rate your relationship with the landlord/property manager?
          </label>
          <select>
            <option value="">Positive</option>
            <option value="">Somewhat positive</option>
            <option value="">Neutral</option>
            <option value="">Somewhat negative</option>
            <option value="">Negative</option>
          </select>
        </fieldset>

      </form>
      <button className='button' onClick={handleSubmit}>Submit</button>
    </div>

  )
}

export default rentalForm
