import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProperties } from '../actions/property'

function DataResponsePage (props) {
  const dispatch = useDispatch()
  const properties = useSelector(state => state.properties)
  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  return (
    <section className='properties'>
      <p className='title'>Properties in the database</p>
      <table>
        <thead>
          <tr>
            <th>
              address
            </th>
            <th>
              rooms1
            </th>
            <th>
              rooms2
            </th>
            <th>
              rentTotal
            </th>
            <th>
            rentUtilities
            </th>

            <th>
            propertyManagedBy
            </th>
            <th>
            rentIncreaseFrequency
            </th>
            <th>
            aveIncrease
            </th>
            <th>
            heatPump
            </th>
            <th>
            insulation
            </th>
            <th>
            fridge
            </th>
            <th>
            curtains
            </th>
            <th>
            oven
            </th>
            <th>
            smokeAlarm
            </th>
            <th>
            fireExtinguisher
            </th>
            <th>
            petsOk
            </th>
            <th>
            smokingOk
            </th>
            <th>
            sublettingAllowed
            </th>
            <th>
            responsiveRepairs
            </th>
            <th>
            rentalManagement
            </th>
            <th>
            repairs
            </th>
            <th>
            sufficientNotice
            </th>
            <th>
            rateRelationship
            </th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property =>
            <tr key={property.id}>
              <td>
                {property.address}
              </td>
              <td>
                {property.rooms_1}
              </td>
              <td>
                {property.rooms_2}
              </td>
              <td>
                {property.rent_total}
              </td>
              <td>
                {property.rent_utilities}
              </td>
              <td>
                {property.property_managed_by}
              </td>
              <td>
                {property.rent_increase_frequency}
              </td>
              <td>
                {property.ave_increase}
              </td>
              <td>
                {property.heat_pump}
              </td>
              <td>
                {property.insulation}
              </td>
              <td>
                {property.fridge}
              </td>
              <td>
                {property.curtains}
              </td>
              <td>
                {property.oven}
              </td>
              <td>
                {property.smoke_alarm}
              </td>
              <td>
                {property.fire_extinguisher}
              </td>
              <td>
                {property.pets_ok}
              </td>
              <td>
                {property.smoking_ok}
              </td>
              <td>
                {property.subletting_allowed}
              </td>
              <td>
                {property.responsive_repairs}
              </td>
              <td>
                {property.rental_management}
              </td>
              <td>
                {property.repairs}
              </td>
              <td>
                {property.sufficient_notice}
              </td>
              <td>
                {property.rate_relationship}
              </td>

            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default DataResponsePage
