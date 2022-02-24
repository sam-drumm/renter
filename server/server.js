const express = require('express')
const path = require('path')

const usersRoutes = require('./routes/users')
const propRoutes = require('./routes/properties')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/properties', propRoutes)

module.exports = server
