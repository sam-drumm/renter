const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select('id',
      'auth0_id as auth0Id',
      'nickname',
      'email')
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
