const express = require('express')
// const jwtAuthz = require('express-jwt-authz')
const { checkJwt } = require('../auth0')

const db = require('../db/reports')
const router = express.Router()

// middleware for checking permissions (authorization)
// const checkAdmin = jwtAuthz(['create:record'], { customScopeKey: 'permissions' })

// only retrieve the reports by a given address
// GET /api/v1/reports?address=12 morgan st, Auckland 0123
router.get('/', (req, res) => {
  db.getReports(req.query.address)
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
// need to address this ()

router.post('/', checkJwt, (req, res) => {
  const { auth0Id, addressAPI, rooms1, rooms2, rentTotal, utilities, year1, year2, managedBy, rentIncrease, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, pets, smoking, subletting, repairsResponsive, repairsConducted, notice, relationship } = req.body
  const newReport = { auth0Id, addressAPI, rooms1, rooms2, rentTotal, utilities, year1, year2, managedBy, rentIncrease, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, pets, smoking, subletting, repairsResponsive, repairsConducted, notice, relationship }
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
