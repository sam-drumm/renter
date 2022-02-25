import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../actions/user'

function Users (props) {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <section className='users'>
      <p className='title'>Registered users in the database</p>
      <table>
        <thead>
          <tr>
            <th>
              auth0Id
            </th>
            <th>
              nickname
            </th>
            <th>
              email
            </th>

          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>
                {user.auth0Id}
              </td>
              <td>
                {user.nickname}
              </td>
              <td>
                {user.email}
              </td>

            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default Users
