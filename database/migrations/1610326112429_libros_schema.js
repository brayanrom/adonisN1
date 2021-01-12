'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LibrosSchema extends Schema {
  up () {
    this.create('libros', (table) => {
      table.increments('id')
      table.string('nombre', 255)
      table.string('editorial')
      table.string('serial', 255)
      table.integer('fechaPub')
      table.timestamps()
    })
  }

  down () {
    this.drop('libros')
  }
}

module.exports = LibrosSchema
