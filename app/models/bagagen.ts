import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Passageiro from './passageiro.js'

export default class Bagagen extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare passageiroId: number

  @column()
  declare peso: number

  @column()
  declare tamanho: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Passageiro)
  declare passageiro: BelongsTo<typeof Passageiro>
}
