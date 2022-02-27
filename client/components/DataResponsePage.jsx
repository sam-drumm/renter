import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchProperties } from '../actions/property'

function DataResponsePage (props) {
  const { address } = useParams()
  const dispatch = useDispatch()
  const properties = useSelector(state => state.properties)
  useEffect(() => {
    console.log(address)
    dispatch(fetchProperties(address)) // pass in the input address
  }, [])

  return (
    <section className='properties'>

      {properties.length > 0
        ? <div>
          {properties.map(property =>
            <div key={property.id}>
              <p className='title'>Search results:</p>
              <br>
              </br>
              <h2>Rental Details</h2>
              <p>
              Rental address:  {property.address}
              </p>
              <p>
             The tenant rented: {property.rooms_1} out of {property.rooms_2} rooms in total
              </p>
              <p>
              Total rent paid per week ${property.rent_total}
              </p>
              <p>
              Were utilities included in the rent? (e.g. water, power, internet)  {property.rent_utilities}
              </p>
              <p>
              The rental property was managed by:  {property.property_managed_by}
              </p>
              <p>
             The rent increased: {property.rent_increase_frequency}
              </p>
              <p>
            The average rent increase was ${property.ave_increase}
              </p>
              <br>
              </br>
              <h2>Amentities</h2>
              <ul>
                <li>
                Heat pump: {property.heat_pump ? 'Yes' : 'No'}
                </li>
                <li>
               Insulation:  {property.insulation ? 'Yes' : 'No'}
                </li>
                <li>
                Fridge:   {property.fridge ? 'Yes' : 'No'}
                </li>
                <li>
                Curtains in the bedroom: {property.curtains ? 'Yes' : 'No'}
                </li>
                <li>
                 Oven:  {property.oven ? 'Yes' : 'No'}
                </li>
                <li>
                Smoke alarm: {property.smoke_alarm ? 'Yes' : 'No'}
                </li>
                <li>
                 Fire extinguisher: {property.fire_extinguisher ? 'Yes' : 'No'}
                </li>
              </ul>
              <h3>Additional terms</h3>
              <ul>
                <li>
               Pets OK:  {property.pets_ok ? 'Yes' : 'No'}
                </li>
                <li>
                Smoking OK: {property.smoking_ok ? 'Yes' : 'No'}
                </li>
                <li>
                 Subletting OK: {property.subletting_allowed ? 'Yes' : 'No'}
                </li>
              </ul>
              <br>
              </br>
              <h2>Relationship with Landlord/Property Manager</h2>
              <p>
              Landlord/Property Manager was: {property.responsive_repairs} to repairs
              </p>
              <p>
              Repairs were conducted by: {property.repairs}
              </p>
              <p>
              Sufficient notice was: {property.sufficient_notice} provided by landlord/property manager before arriving at the property
              </p>
              <p>
               Relationship with the landlord/property manager was rated: {property.rate_relationship}
              </p>
            </div>
          )}

        </div>

        : <div>
          <nav className=''>
            <p>

            There are not properties that match the address you have searched for.
If you are a previous tenant at this address, please

              <Link to='/register'> log-in / register</Link> to complete a Rental Form.
            </p>
          </nav>
        </div>
      }

    </section>
  )
}

export default DataResponsePage
