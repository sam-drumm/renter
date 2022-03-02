import { setUser } from './actions/user'
import { getUser } from './apis/users'
import store from './store'

const emptyUser = {
  auth0Id: '',
  email: '',
  name: '',
  token: '',
  roles: []
}

function saveUser (user = emptyUser) {
  store.dispatch(setUser(user))
}

export async function cacheUser (useAuth0) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      const token = await getAccessTokenSilently()
      const existingUser = await getUser(user.sub, token)
      if (existingUser) {
        console.log('user exists in db')
        const { id, nickname } = existingUser
        saveUser({ id, auth0Id: user.sub, nickname, email: user.name, token })
      } else {
        console.log('user does not exist in db')
        saveUser({ auth0Id: user.sub, email: user.name, token })
      }
    } catch (err) {
      console.error(err)
    }
  } else {
    saveUser()
  }
}

export function getLoginFn (useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/rentalform`
  return () => loginWithRedirect({
    redirectUri
  })
}

export function getLogoutFn (useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated (useAuth0) {
  return useAuth0().isAuthenticated
}

export function getRegisterFn (useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/register`
  return () => loginWithRedirect({
    redirectUri,
    screen_hint: 'signin',
    scope: 'role:member'
  })
}
