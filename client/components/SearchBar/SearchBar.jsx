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
      <div className='dataResult'>
        {data.map((value, key => {
          return (
            <a className='dataItem' href={value.link} target='blank'>
              <p>{value.title}</p>
            </a>
          )
        }))}
      </div>
    </div>
  )
}
