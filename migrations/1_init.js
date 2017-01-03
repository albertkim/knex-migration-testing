exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').unsigned().primary()
    t.string('email').notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
