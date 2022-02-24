import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../actions/user'

function PropertyDetails (props) {
  const dispatch = useDispatch()
  const details = useSelector(state => state.users)
  useEffect(() => {
    dispatch(fetchDetails())
  }, [])
  return (
    <section className='details'>
    </section>
  )
}
