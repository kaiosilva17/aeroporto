import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'passageiros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.string('sobrenome', 100).notNullable()
      table.string('cpf', 14).notNullable()
      table.string('data_nascimento', 15).notNullable()
      table.string('nacionalidade', 50).notNullable()
      table.integer('voo_id').unsigned().references('id').inTable('voos').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
