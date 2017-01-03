exports.up = function(knex, Promise) {
  return knex.schema.table('users', (t) => {
    t.string('password').notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (t) => {
    t.dropColumn('password')
  })
}
