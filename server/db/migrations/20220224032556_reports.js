exports.up = function (knex) {
  return knex.schema.createTable('reports', table => {
    table.increments('id')
    table.integer('property_id').references('properties.id')
    table.integer('user_id').references('users.id')
    table.string('address').references('properties.address')
    table.integer('address_API')
    table.integer('rooms_1')
    table.integer('rooms_2')
    table.integer('rent_total')
    table.boolean('utilities')
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
    table.integer('rental_management')
    table.integer('responsive_repairs')
    table.string('repairs_conducted')
    table.integer('sufficient_notice')
    table.integer('rate_relationship')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reports')
}
