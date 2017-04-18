
'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('cookies', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('mouthfeel').notNullable().defaultTo('')
    table.integer('num_ingredients').notNullable().defaultTo(0)
    table.boolean('delicious').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('cookie')
}
