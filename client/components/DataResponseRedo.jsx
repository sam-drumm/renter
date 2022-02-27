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
      <p className='title'>Properties in the database</p>

      {properties.length > 0
        ? <div>
          {properties.map(property =>
            <div key={property.id}>

              <p>
              Rental address:  {property.address}
              </p>
              <p>
             The tenant rented: {property.rooms_1} out of

                {property.rooms_2} rooms in total.
              </p>
              <p>
              Total rent paid per week:  {property.rent_total}
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
            The average rent increase was:  {property.ave_increase}
              </p>
              <h2>Amentities</h2>
              <ul>
                <li>
                 - Heat pump {property.heat_pump ? 'Yes' : 'No'}
                </li>
                <li>
              - Insulation  {property.insulation ? 'Yes' : 'No'}
                </li>
                <li>
               - Fridge   {property.fridge ? 'Yes' : 'No'}
                </li>
                <li>
                 - Curtains in the bedroom {property.curtains ? 'Yes' : 'No'}
                </li>
                <li>
                  {property.oven ? 'Yes' : 'No'}
                </li>
                <li>
                  {property.smoke_alarm ? 'Yes' : 'No'}
                </li>
                <li>
                  {property.fire_extinguisher ? 'Yes' : 'No'}
                </li>
                <li>
                  {property.pets_ok ? 'Yes' : 'No'}
                </li>
                <li>
                  {property.smoking_ok ? 'Yes' : 'No'}
                </li>
              </ul>

              {property.subletting_allowed}

              {property.responsive_repairs}

              {property.rental_management}

              {property.repairs}

              {property.sufficient_notice}

              {property.rate_relationship}

            </div>
          )}

        </div>

        : <div>
          <nav className=''>
            <p>

            There are not properties that match the address you have searched for.
If you are a previous tenant at this address, please

              <Link to='/register'> log-in / register</Link>

              to complete a Rental Form.
            </p>
          </nav>
        </div>
      }

    </section>
  )
}

export default DataResponsePage
