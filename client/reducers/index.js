import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import properties from './properties'
import property from './property'

export default combineReducers({
  users,
  user,
  properties,
  property
})
