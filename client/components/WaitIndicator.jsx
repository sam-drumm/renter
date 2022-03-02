import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/react'

export default function WaitIndicator () {
  const waiting = useSelector(state => state.waiting)

  return (
    <>
      <div>
        { waiting
          ? <>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='md'
            />
          </>
          : '\u00a0' }
      </div>
    </>
  )
}
