exports.seed = function (knex) {
  return knex('reports').del()
    .then(function () {
      return knex('reports').insert([
        {
          id: 1,
          property_id: 1,
          user_id: 1,
          address: '100 Queen Street, Auckland Central, Auckland',
          rooms_1: 1,
          rooms_2: 3,
          rent_total: 600,
          rent_utilities: true,
          year_1: 2020,
          year_2: 2021,
          property_managed_by: 'Landlord',
          rent_increase_frequency: 'Once a year',
          ave_increase: 20,
          heat_pump: true,
          insulation: false,
          fridge: true,
          curtains: false,
          oven: true,
          smoke_alarm: true,
          fire_extinguisher: false,
          pets_ok: true,
          smoking_ok: true,
          subletting_allowed: false,
          responsive_repairs: 1,
          rental_management: 2,
          repairs: 'Landlord',
          sufficient_notice: 2,
          rate_relationship: 3

        }

      ])
    })
}
