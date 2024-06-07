import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import CompanhiasAerea from './companhias_aerea.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cargo: string

  @column()
  declare companhiaAereaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => CompanhiasAerea, {
    foreignKey: 'companhiaAereaId',
  })
  declare companhia: BelongsTo<typeof CompanhiasAerea>
}
