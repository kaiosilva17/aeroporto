import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'aeronaves'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('modelo').notNullable()
      table.integer('capacidade').notNullable()
      table.integer('ano_fabricacao').notNullable()
      table
        .integer('companhia_id')
        .unsigned()
        .references('id')
        .inTable('companhias_aereas')
        .notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
