const express = require('express')
const jwtAuthz = require('express-jwt-authz')
const { checkJwt } = require('../auth0')

const db = require('../db/properties')
const router = express.Router()

// middleware for checking permissions (authorization)
const checkAdmin = jwtAuthz(['create:report'], { customScopeKey: 'permissions' })

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

router.post('/', (req, res) => {
  const { id, address } = req.body
  const newProperty = { id, address }
  console.log(newProperty)
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

// checkJwt, checkAdmin,
