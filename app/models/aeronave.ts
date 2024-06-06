import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import CompanhiasAerea from './companhias_aerea.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

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
}
