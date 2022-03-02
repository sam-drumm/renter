import React from 'react'

import NavBar from './Nav/NavBar'
import WaitIndicator from './WaitIndicator'

export default function Header () {
  return (
    <header>
      <div className='flex-container container'>
        <WaitIndicator />
        <NavBar />
      </div>
    </header>
  )
}
