import { CLEAR_PROPERTIES, SET_PROPERTIES } from '../actions/property'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROPERTIES:
      return action.properties
    case CLEAR_PROPERTIES:
      return []
    default:
      return state
  }
}

export default reducer