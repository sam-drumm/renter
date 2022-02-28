import React from 'react'

import Nav from './Nav'
import WaitIndicator from './WaitIndicator'

export default function Header () {
  return (
    <header className='header'>
      <div className='flex-container container'>
        <WaitIndicator />
        <Nav />
      </div>
    </header>
  )
}
