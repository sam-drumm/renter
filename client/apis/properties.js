import request from 'superagent'

const rootUrl = '/api/v1'

export function getProperties () {
  return request.get(rootUrl + '/reports')
    .then(res => {
      return res.body.report
    })
}

export function addProperties (property, token) {
  return request.post(rootUrl + '/reports')
    .set('authorization', 'Bearer ' + token)
    .send(property)
}
