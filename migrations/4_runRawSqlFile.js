const fs = require('fs')

exports.up = function(knex, Promise) {
  const sql = fs.readFileSync(__dirname + '/../sql_up.sql').toString();
  return knex.raw(sql)
}

exports.down = function(knex, Promise) {
  const sql = fs.readFileSync(__dirname + '/../sql_down.sql').toString();
  return knex.raw(sql)
}
