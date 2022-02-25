const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select()
}

function addUser (input, db = connection) {
  const { auth0Id, nickname, email } = input
  const user = { auth0_id: auth0Id, nickname, email }
  return db('users')
    .insert(user)
}

module.exports = {
  getUsers,
  addUser
}
