const express = require('express')
const jwtAuthz = require('express-jwt-authz')
const { checkJwt } = require('../auth0')

const db = require('../db/reports')
const router = express.Router()

// middleware for checking permissions (authorization)
const checkAdmin = jwtAuthz(['create:report'], { customScopeKey: 'permissions' })

// GET /api/v1/reports
router.get('/', (req, res) => {
  db.getReports()
    .then((report) => {
      res.json({ report })
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve report'
        }
      })
    })
})

// POST /api/v1/reports
router.post('/', checkJwt, checkAdmin, (req, res) => {
  const { propertyId, address, rooms1, rooms2, rentTotal, rentUtilities, year1, year2, propertyManagedBy, rentIncreaseFrequency, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, petsOk, smokingOk, sublettingAllowed, responsiveRepairs, rentalManagement, repairs, sufficientNotice, rateRelationship } = req.body
  const newReport = { propertyId, address, rooms1, rooms2, rentTotal, rentUtilities, year1, year2, propertyManagedBy, rentIncreaseFrequency, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, petsOk, smokingOk, sublettingAllowed, responsiveRepairs, rentalManagement, repairs, sufficientNotice, rateRelationship }
  db.addReport(newReport)
    .then((report) => {
      res.status(201).json({ report })
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add report'
        }
      })
    })
})

module.exports = router
