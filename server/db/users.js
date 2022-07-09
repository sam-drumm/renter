const connection = require('./connection')

function getUser (auth0Id, db = connection) {
  return db('users')
    .where('auth0_id', auth0Id)
    .select('id', 'auth0_id as auth0Id', 'nickname', 'email')
}

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
  getUser,
  getUsers,
  addUser
}
