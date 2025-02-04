import { CLEAR_USERS, SET_USERS } from '../actions/user'

const initialState = []

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users
    case CLEAR_USERS:
      return []
    default:
      return state
  }
}

export default users
