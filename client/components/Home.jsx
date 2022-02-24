import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../actions/user'

function Users (props) {
  const dispatch = useDispatch()
  // const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <section className='users'>
      <p className='title'>Enter a Residental Address</p>
    </section>
  )
}

export default Users
