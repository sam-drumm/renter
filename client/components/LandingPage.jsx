import React from 'react'
import SearchBar from './SearchBar'

export default function LandingPage () {
  return (
      <>
        <div className="lp-main-wrapper">
            <div className='lp-main1'>
                <title>Main 1</title>
                <h1>Renter</h1>
                <h3>Live Better</h3>
                <p>Learn about your next rental before making the commitment. Find out what you need to know by searching for the address.</p></div>
            <div className='lp-main2'>
                <title>Main 2</title>
                <img src="/images/house_search.png" alt="image of a house"/>
                <SearchBar placeholder='Start by typing the address of the rental property...' />
                </div>
        </div>
        <div className="lp-steps-wrapper">
            <div className='lp-step1'>
                <h2>Step 1</h2>
                <p>Search your rental by address. If it's not there, sign up or log in to request for it to be added to our database.</p>
                </div>
            <div className='lp-step2'>
                <h2>Step 2</h2>
                <p>Read reports or add your own. Sign up or log in to <button>Add a report</button></p>
            </div>
            <div className='lp-step3'>
            <h2>Step 3</h2>
            <p>Rent with confidence and make the world a better place.</p>
            </div>
        </div>
      </>
  )
}
