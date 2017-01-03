const Knex = require('knex')
const knexConfig = require('./knexfile')

console.log('Starting server')

const environmentObject = {
  NODE_ENV: process.env.NODE_ENV,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE
}

console.log(environmentObject)

for (let key in environmentObject) {
  const value = environmentObject[key]
  if (value === undefined) {
    console.error(`${key} is missing in your .env file`)
    process.exit(1)
  }
}

const knex = Knex(knexConfig)

console.log('starting server')

console.log('Running...')
