import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../actions/user'

function Users (props) {
  return (

    <div className='form-wrapper'>
      <h1>Rental Form</h1>
      <p>Please fill in this form to add to the site</p>
      <form>
        <fieldset>
          <label>
          Address
          </label>
          <input type="text" placeholder="address api" value="address api" />
        </fieldset>
        <fieldset>
          <label>
  As a tenant, I have rented
          </label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p>
  out of
          </p>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <p>
  in total.
            </p>
          </select>
        </fieldset>
      </form>

      <h3>Search rental property by address</h3>
      <h3>Search bar goes here</h3>
      <h3>Address details to be confirmed</h3>
    </div>
  //     <form onSubmit={handleSubmit}>

  //       </label>
  // <label htmlFor='rentTotal'>
  //   Rent paid in total $
  //   <input type='int'
  //   id=''

  // </label>

  //       <input type="submit" value="Submit" />
  //     </form>

  )
}

export default Users
