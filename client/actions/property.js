import { getProperties } from '../apis/properties'

export const SET_PROPERTY = 'SET_PROPERTY'
export const SET_PROPERTIES = 'SET_PROPERTIES'
export const CLEAR_PROPERTY = 'CLEAR_PROPERTY'
export const CLEAR_PROPERTIES = 'CLEAR_PROPERTIES'

export function setProperty (property) {
  return {
    type: SET_PROPERTY,
    property
  }
}

export function setProperties (properties) {
  return {
    type: SET_PROPERTIES,
    properties
  }
}

export function clearProperty () {
  return {
    type: CLEAR_PROPERTY
  }
}

export function clearProperties () {
  return {
    type: CLEAR_PROPERTIES
  }
}

export function fetchProperties () {
  return dispatch => {
    return getProperties()
      .then(properties => {
        dispatch(setProperties(properties))
        return null
      })
  }
}
