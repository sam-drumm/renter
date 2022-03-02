import {
  setUser,
  setUsers,
  clearUser,
  clearUsers,
  SET_USER,
  SET_USERS,
  CLEAR_USER,
  CLEAR_USERS
} from './user'

describe('setUser', () => {
  it('returns the correct action', () => {
    const action = setUser()
    expect(action.type).toBe(SET_USER)
  })
})

describe('setUsers', () => {
  it('returns the correct action', () => {
    const action = setUsers()
    expect(action.type).toBe(SET_USERS)
  })
})

describe('clearUser', () => {
  it('returns the correct action', () => {
    const action = clearUser()
    expect(action.type).toBe(CLEAR_USER)
  })
})

describe('clearUsers', () => {
  it('returns the correct action', () => {
    const action = clearUsers()
    expect(action.type).toBe(CLEAR_USERS)
  })
})
