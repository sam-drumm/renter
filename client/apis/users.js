import request from 'superagent'

const rootUrl = '/api/v1/users'

export function getUser (auth0Id, token) {
  return request.get(rootUrl + `/${auth0Id}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => res.body)
}

export function getUsers () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.users
    })
}

export function addUser (user) {
  return request.post(rootUrl)
    .send(user)
}

export function getUserRoles (id) {
  return request.get(rootUrl + `/${id}`)
    .then(res => {
      return res.body.roles
    })
}
