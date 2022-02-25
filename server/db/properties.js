const connection = require('./connection')

function getProperties (db = connection) {
  return db('properties')
    .select()
}

function addProperty (newProperty, db = connection) {
  const { propertyId, address } = newProperty
  return db('properties')
    .insert({
      id: 1,
      property_id: propertyId,
      address
    })
}

module.exports = {
  getProperties,
  addProperty
}
