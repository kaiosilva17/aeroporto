import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'voos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('numero_voo', 20).notNullable()
      table.string('origem', 100).notNullable()
      table.string('destino', 100).notNullable()
      table.string('data_partida', 40).notNullable()
      table.string('data_chegada', 40).notNullable()
      table.integer('aeronave_id').unsigned().references('id').inTable('aeronaves').notNullable()
      table
        .integer('companhia_id')
        .unsigned()
        .references('id')
        .inTable('companhias_aereas')
        .notNullable()
      table
        .integer('portao_embarque_id')
        .unsigned()
        .references('id')
        .inTable('portoes_embarques')
        .notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
