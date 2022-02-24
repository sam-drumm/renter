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
      <p className='title'>Registered Tenant info in the database</p>
    </section>
  )
}

export default Users
