exports.seed = function (knex) {
  return knex('properties').del()
    .then(function () {
      return knex('properties').insert([
        {
          id: 1,
          address: '100 Queen Street, Auckland Central, Auckland'
        },
        {
          id: 2,
          address: '200 Queen Street, Auckland Central, Auckland'
        },
        {
          id: 3,
          address: '300 Queen Street, Auckland Central, Auckland'
        },
        {
          id: 4,
          address: '12 Morgan Street, Newtown Central, Auckland'
        }
      ])
    })
}
