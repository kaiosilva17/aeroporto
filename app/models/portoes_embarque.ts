import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Voo from './voo.js'

export default class PortoesEmbarque extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare terminal: string

  @column()
  declare numero: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Voo)
  declare voos: HasMany<typeof Voo>
}
