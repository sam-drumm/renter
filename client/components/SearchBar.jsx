import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { getAddresses } from '../apis/addresses'
import { useNavigate } from 'react-router-dom'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'

export default function SearchBar () {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const history = useNavigate()
  const dispatch = useDispatch()

  const handleFilter = async (event) => {
    const searchWord = event.target.value
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
    <InputGroup>

      <Input
        type='text'
        placeholder='Start by typing the address of the rental property...'
        value={wordEntered}
        onChange={handleFilter}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleClick()
          }
        }}
      />
      <InputRightElement>
        {filteredData.length === 0
          ? (<SearchIcon />)
          : (<CloseIcon onClick={clearInput} />)
        }
      </InputRightElement>

    </InputGroup>

  )
}
