const connection = require('./connection')

function getProperties (db = connection) {
  return db('properties')
    .select()
}

function addProperty (newProperty, db = connection) {
  const { gardenId, title, date, description, volunteersNeeded } = newEvent
  return db('events')
    .insert({
      garden_id: gardenId,
      volunteers_needed: volunteersNeeded,
      title,
      date,
      description,
      status: 'Active'
    })
    .then((ids) => getEventById(ids[0], db))
}

module.exports = {
  getProperties,
  addProperty
}
