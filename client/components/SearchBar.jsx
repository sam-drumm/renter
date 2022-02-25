import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { getAddresses } from '../apis/addresses'

export function SearchBar ({ placeholder }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = async (event) => {
    const searchWord = event.target.value
    // address typed in by the user in search bar
    setWordEntered(searchWord)
    const addresses = await getAddresses(searchWord)
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(addresses)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  function handleClick (value) {
    console.log(value)
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className='searchIcon'>
          {filteredData.length === 0
            ? (<SearchIcon />)
            : (<CloseIcon id="clearBtn" onClick={clearInput} />)
          }
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 5).map(value =>
            <a
              className='dataItem'
              href="#"
              key={value.id}
              onClick={() => handleClick(value)}
            >
              <p>{value.address}</p>
            </a>

            // used slice so that when the api fetches addresses, it will show the first 5 matches
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
