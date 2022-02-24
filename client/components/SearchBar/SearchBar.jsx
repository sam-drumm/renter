import React from 'react'
import './SearchBar.css'
import HouseIcon from '@mui/icons-material/House'

export function SearchBar (placeholder, data) {
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={'Enter a Residential Address'}/>
        <div className='searchIcon'> <HouseIcon /></div>
      </div>
      <div className='dataResults'></div>
    </div>
  )
}
