const express = require('express')
const path = require('path')

const usersRoutes = require('./routes/users')
const reportRoutes = require('./routes/reports')
const addressRoutes = require('./routes/addresses')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/reports', reportRoutes)
server.use('/api/v1/addresses', addressRoutes)

// Redirect all of our server requests to /index.html
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
