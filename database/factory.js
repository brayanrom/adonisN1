'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })


import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Libro from 'App/Models/Libro'


export const LibroFactory = Factory
  .define(Libro, ({ faker }) => {
    return {
        nombre: faker.internet.userName(),
        editorial: faker.internet.userName(),
        serial: chance.integer({ min: 1000000000, max: 9999999999 }),
        fechaPub: chance.integer({ min: 2000, max: 2020 }),
    }
  })
  .build()





