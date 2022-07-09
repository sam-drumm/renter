exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|61414f84d35ac900717bc280',
          nickname: 'penelope',
          email: 'kelmarna@email.nz'
        },
        {
          id: 2,
          auth0_id: 'auth0|61414f84d35ac900717bc282',
          nickname: 'john',
          email: 'sammy@example.com'
        }
      ])
    })
}
