import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { getAddresses } from '../apis/addresses'
import { useHistory } from 'react-router-dom'

export default function SearchBar ({ placeholder }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const history = useHistory()

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
    setFilteredData([])
    console.log(`selected address: ${value.address}`)
    console.log("now it's time to navigate to another page")
    history.push(`/reports/${value.address}`)
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder='Start by typing the address of the rental property...'
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
