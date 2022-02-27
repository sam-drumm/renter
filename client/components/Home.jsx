import React from 'react'
import { Route } from 'react-router'
import SearchBar from './SearchBar'

export function Home () {
  return (
    <div className='home'>
      <Route exact path='/' component={SearchBar} />
    </div>
  )
}
