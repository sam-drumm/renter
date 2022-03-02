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

    res.json(result)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
