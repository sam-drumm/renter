import request from 'superagent'

export function getAddresses (input) {
  return request
    .get(`/api/v1/addresses?query=${input}`)
    .then(res => res.body)
}