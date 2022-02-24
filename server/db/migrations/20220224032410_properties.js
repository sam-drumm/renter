exports.up = function (knex) {
  return knex.schema.createTable('properties', table => {
    table.increments('id')
    table.string('address')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('properties')
}
