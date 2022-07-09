exports.seed = function (knex) {
  return knex('reports').del()
    .then(function () {
      return knex('reports').insert([
        {
          id: 1,
          user_id: 1,
          address: '528 Mount Eden Road, Mount Eden, Auckland',
          rooms_1: 1,
          rooms_2: 3,
          rent_total: 600,
          utilities: 'yes',
          year_1: 2020,
          year_2: 2021,
          property_managed_by: 'Landlord',
          rent_increase: 'Once a year',
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
          responsive_repairs: 'Very responsive',
          repairs: 'Landlord',
          sufficient_notice: 'Sometimes',
          rate_relationship: 'Neutral'

        },
        {
          id: 2,
          user_id: 1,
          address: '26 Hurman Street, Karori, Wellington',
          rooms_1: 1,
          rooms_2: 3,
          rent_total: 900,
          utilities: 'yes',
          year_1: 2020,
          year_2: 2022,
          property_managed_by: 'Property Manager',
          rent_increase: 'Once a year',
          ave_increase: 20,
          heat_pump: true,
          insulation: false,
          fridge: true,
          curtains: true,
          oven: true,
          smoke_alarm: true,
          fire_extinguisher: false,
          pets_ok: true,
          smoking_ok: false,
          subletting_allowed: false,
          responsive_repairs: 'Very responsive',
          repairs: 'Landlord',
          sufficient_notice: 'Sometimes',
          rate_relationship: 'Neutral'

        }

      ])
    })
}
