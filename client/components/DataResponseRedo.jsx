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
                {property.address}
              </p>
              {property.rooms_1}

              {property.rooms_2}

              {property.rent_total}

              {property.rent_utilities}

              {property.property_managed_by}

              {property.rent_increase_frequency}

              {property.ave_increase}

              <p> {property.heat_pump ? 'true' : 'false'}</p>

              {property.insulation ? 'true' : 'false'}

              {property.fridge ? 'true' : 'false'}

              {property.curtains ? 'true' : 'false'}

              {property.oven ? 'true' : 'false'}

              {property.smoke_alarm ? 'true' : 'false'}

              {property.fire_extinguisher ? 'true' : 'false'}

              {property.pets_ok ? 'true' : 'false'}

              {property.smoking_ok ? 'true' : 'false'}

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
