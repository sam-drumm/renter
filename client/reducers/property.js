import { SET_PROPERTY, CLEAR_PROPERTY } from '../actions/property'

const emptyProperty = {
  id: null,
  name: ''
}

export default function user (state = emptyProperty, action) {
  switch (action.type) {
    case SET_PROPERTY:
      return action.property

    case CLEAR_PROPERTY:
      return emptyProperty

    default:
      return state
  }
}
