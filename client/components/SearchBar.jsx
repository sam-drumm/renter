import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { getAddresses } from '../apis/addresses'
import { useNavigate } from 'react-router-dom'
import { setWaiting, clearWaiting } from '../actions/waiting'

export default function SearchBar () {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const history = useNavigate()
  const dispatch = useDispatch()

  const handleFilter = async (event) => {
    const searchWord = event.target.value
    // address typed in by the user in search bar
    setWordEntered(searchWord)
    if (searchWord === '') {
      setFilteredData([])
    } else {
      const addresses = await getAddresses(searchWord)
      setFilteredData(addresses)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  function handleClick (value) {
    dispatch(setWaiting())
    setFilteredData([])
    history(`/reports/${value.address}`)
    dispatch(clearWaiting())
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
