import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import CompanhiasAerea from './companhias_aerea.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Voo from './voo.js'

export default class Aeronave extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare modelo: string

  @column()
  declare capacidade: number

  @column()
  declare anoFabricacao: number

  @column()
  declare companhiaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => CompanhiasAerea)
  declare companhia: BelongsTo<typeof CompanhiasAerea>

  @hasMany(() => Voo)
  declare voos: HasMany<typeof Voo>
}
