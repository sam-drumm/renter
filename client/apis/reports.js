import request from 'superagent'

export function getReports () {
  return request.get('/api/v1/reports')
    .then((res) => res.body)
}

export function postReports (report) {
  return request.post('/api/v1/reports')
    .send(report)
    .then((res) => res.body)
}
