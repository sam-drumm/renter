import React from 'react'
// import './SearchBar.css'
// import HouseIcon from '@mui/icons-material/House'

// function Users (props) {
//   const dispatch = useDispatch()
//   const users = useSelector(state => state.users)
//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])

//   return (
//     <section className='users'>
//       <p className='title'>Enter Residental Address</p>
//     </section>
//   )

export function SearchBar (placeholder, data) {
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={'Enter a Residential Address'}/>
        {/* <div className='searchIcon'> <HouseIcon /></div> */}
      </div>
      <div className='dataResults'></div>
    </div>
  )
}

// export default Users

/* <table>
  <thead>
    <tr>
      <th>
        auth0Id
      </th>
      <th>
        name
      </th>
      <th>
        email
      </th>
      <th>
        description
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
          {user.description}
        </td>
      </tr>
    )}
  </tbody>
</table> */
