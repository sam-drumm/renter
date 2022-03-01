const connection = require('./connection')

function getProperties (db = connection) {
  return db('properties')
    .select()
}

function addProperty (newProperty, db = connection) {
  const { id, address } = newProperty
  return db('properties')
    .insert({
      id,
      address
    })
}

function getAddresses (db = connection) {
  return db('properties')
    .select('address')
}

module.exports = {
  getProperties,
  addProperty,
  getAddresses
}
