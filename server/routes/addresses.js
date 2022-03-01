const request = require('superagent')
const express = require('express')
const db = require('../db/reports')

const router = express.Router()

// GET /api/v1/addresses?query

router.get('/', async (req, res) => {
  try {
    const addresses = await db.getAddresses()
    const result = addresses.filter((value) => {
      return value.address?.toLowerCase().includes(req.query.query?.toLowerCase())
    })

    console.log(addresses)
    res.json(result)
  } catch (error) {
    console.error(error)
  }
//   request.get(`https://address.finder.nz/q=${req.query.query}`)
//     .set('apiKey', 'YNTKPBLFDGHA8RMVXQ37')
//     .then(apiResponse => {
//       res.json(apiResponse.body)
//     })
})

// make HTTP request

module.exports = router
