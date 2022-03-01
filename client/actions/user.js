import { getUsers } from '../apis/users'

export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const CLEAR_USER = 'CLEAR_USER'
export const CLEAR_USERS = 'CLEAR_USERS'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function setUsers (users) {
  return {
    type: SET_USERS,
    users
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

export function clearUsers () {
  return {
    type: CLEAR_USERS
  }
}

export function fetchUsers (auth0Id, token) {
  console.log(auth0Id)
  return dispatch => {
    return getUsers(auth0Id, token)
      .then(users => {
        dispatch(setUsers(users))
        return null
      })
  }
}

fetchUsers('auth0|621d3d2b7262c30070ae44cf', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1Oej…eSU73vqWOzDy2k0ja9wRfZv02A-aekX0QJMP6kjVeWn3g-3bw')
