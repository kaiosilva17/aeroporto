import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Aeronave from './aeronave.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Funcionario from './funcionario.js'

export default class CompanhiasAerea extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare pais: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Aeronave)
  declare aeronaves: HasMany<typeof Aeronave>

  @hasMany(() => Funcionario)
  declare funcionarios: HasMany<typeof Funcionario>
}
