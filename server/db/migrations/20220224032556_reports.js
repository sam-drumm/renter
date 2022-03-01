exports.up = function (knex) {
  return knex.schema.createTable('reports', table => {
    table.increments('id')
    table.integer('user_id').references('users.id')
    table.string('address')
    table.integer('rooms_1')
    table.integer('rooms_2')
    table.integer('rent_total')
    table.string('utilities')
    table.integer('year_1')
    table.integer('year_2')
    table.string('property_managed_by')
    table.string('rent_increase')
    table.integer('ave_increase')
    table.boolean('heat_pump')
    table.boolean('insulation')
    table.boolean('fridge')
    table.boolean('curtains')
    table.boolean('oven')
    table.boolean('smoke_alarm')
    table.boolean('pets_ok')
    table.boolean('fire_extinguisher')
    table.boolean('smoking_ok')
    table.boolean('subletting_allowed')
    table.string('responsive_repairs')
    table.string('repairs')
    table.string('sufficient_notice')
    table.string('rate_relationship')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reports')
}
