const request = require('superagent')
const express = require('express')

const router = express.Router()

const fakeData = [
    { id: 1, pxid: '1', address: '8c Macaulay Street, Eden Terrace, Auckland' },
    { id: 2, pxid: '2', address: '12 Morgan Street, Newmarket, Auckland' },
    { id: 3, pxid: '3', address: '11 Chatfield Place, Remuera, Auckland' },
    { id: 4, pxid: '4', address: '28 Kingsview Road, Mount Eden, Auckland' }
  ]

// GET /api/v1/addresses?query

router.get('/', (req, res) => {
    // const result = fakeData.filter((value) => {
    //     return value.address.toLowerCase().includes(req.query.query?.toLowerCase())
    //   })
    request.get(`https://address.finder.nz/q=${req.query.query}`)
    .set('apiKey', 'RAFB8DWKV6XG7LHUMPYN')
    .then(apiResponse => {
        res.json(apiResponse.body)
    })
    
})

//make HTTP request 


module.exports = router