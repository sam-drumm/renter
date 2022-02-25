import React from 'react'
import HouseIcon from '@mui/icons-material/House'

export function SearchBar ({ placeholder, data }) {
 
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder}/>
        <div className='searchIcon'> <HouseIcon /></div>
      </div>
      <div className='dataResult'>
        {data.map((value, key) => {
          return <a className='dataItem' href="#"><p>{value.address}</p></a>
        })}
      </div>
    </div>
  )
}

export default SearchBar