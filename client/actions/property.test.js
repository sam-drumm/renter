import {
  setProperty,
  setProperties,
  clearProperty,
  clearProperties,
  SET_PROPERTY,
  SET_PROPERTIES,
  CLEAR_PROPERTY,
  CLEAR_PROPERTIES
} from './property'

describe('setProperty', () => {
  it('returns the correct action', () => {
    const action = setProperty()
    expect(action.type).toBe(SET_PROPERTY)
  })
})

describe('setProperties', () => {
  it('returns the correct action', () => {
    const action = setProperties()
    expect(action.type).toBe(SET_PROPERTIES)
  })
})

describe('clearProperty', () => {
  it('returns the correct action', () => {
    const action = clearProperty()
    expect(action.type).toBe(CLEAR_PROPERTY)
  })
})

describe('clearProperties', () => {
  it('returns the correct action', () => {
    const action = clearProperties()
    expect(action.type).toBe(CLEAR_PROPERTIES)
  })
})
