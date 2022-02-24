exports.seed = function (knex) {
  return knex('properties').del()
    .then(function () {
      return knex('properties').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          name: 'kelmarna',
          email: 'kelmarna@email.nz',
          description: 'the awesome developer'
        }
      ])
    })
}
