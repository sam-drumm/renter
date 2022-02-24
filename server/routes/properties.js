const express = require('express')
const jwtAuthz = require('express-jwt-authz')
const { checkJwt } = require('../auth0')

const db = require('../db/properties')
const router = express.Router()

// middleware for checking permissions (authorization)
const checkAdmin = jwtAuthz(['create:property'], { customScopeKey: 'permissions' })

// GET /api/v1/properties
router.get('/', (req, res) => {
  db.getProperties()
    .then((properties) => {
      res.json({ properties })
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve properties'
        }
      })
    })
})

// POST /api/v1/properties/protected

router.post('/', checkJwt, checkAdmin, (req, res) => {
  const { propertyId, address, rooms1, rooms2, rentTotal, rentUtilities, year1, year2, propertyManagedBy, rentIncreaseFrequency, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, petsOk, smokingOk, sublettingAllowed, responsiveRepairs, rentalManagement, repairs, sufficientNotice, rateRelationship } = req.body
  const newProperty = { propertyId, address, rooms1, rooms2, rentTotal, rentUtilities, year1, year2, propertyManagedBy, rentIncreaseFrequency, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, petsOk, smokingOk, sublettingAllowed, responsiveRepairs, rentalManagement, repairs, sufficientNotice, rateRelationship }
  db.addProperty(newProperty)
    .then((property) => {
      res.status(201).json({ property })
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add property'
        }
      })
    })
})

module.exports = router
