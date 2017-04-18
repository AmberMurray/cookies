
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cookies').del()
    .then(function () {
      // Inserts seed entries
      return knex('cookies').insert([
        {
          name: 'chocolate chip',
          mouthfeel: 'chewy',
          num_ingredients: '7',
          delicious: true
        },
        {
          name: 'double chocolate chip',
          mouthfeel: 'cake-like',
          num_ingredients: '8',
          delicious: true
        },
        {
          name: 'sugar',
          mouthfeel: 'soft',
          num_ingredients: '4',
          delicious: true
        },
        {
          name: 'dog treat',
          mouthfeel: 'crunchy',
          num_ingredients: '1',
          delicious: false
        }
      ])
    }).then (() => {
    return knex.raw(
      "SELECT setval('cookies_id_seq', (SELECT MAX(id) FROM cookies))"
    )
  })
}
