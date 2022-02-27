import request from 'superagent'

const fakeData = [
  { id: 1, pxid: '1', address: '8c Macaulay Street, Eden Terrace, Auckland' },
  { id: 2, pxid: '2', address: '12 Morgan Street, Newmarket, Auckland' },
  { id: 3, pxid: '3', address: '11 Chatfield Place, Remuera, Auckland' },
  { id: 4, pxid: '4', address: '28 Kingsview Road, Mount Eden, Auckland' },
  { id: 5, pxid: '5', address: '100 Queen Street, Auckland Central, Auckland'}
]

export function getAddresses (input) {
  return request
    .get(`/api/v1/addresses?query=${input}`)
    .then(res => res.body)
}
