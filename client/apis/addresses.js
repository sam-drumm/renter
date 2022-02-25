// import request from 'superagent'

const fakeData = [
  { id: 1, pxid: '1', address: '8c Macaulay Street, Eden Terrace, Auckland' },
  { id: 2, pxid: '2', address: '12 Morgan Street, Newmarket, Auckland' },
  { id: 3, pxid: '3', address: '11 Chatfield Place, Remuera, Auckland' },
  { id: 4, pxid: '4', address: '28 Kingsview Road, Mount Eden, Auckland' }
]

export function getAddresses (input) {
  // return request
  //   .get(`/api/v1/address?q=${input}`)
  //   .then(res => res.body)

  const result = fakeData.filter((value) => {
    return value.address.toLowerCase().includes(input.toLowerCase())
  })
  return Promise.resolve(result)
}
