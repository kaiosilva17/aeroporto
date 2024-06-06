import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Voo from './voo.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Bagagen from './bagagen.js'

export default class Passageiro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare sobrenome: string

  @column()
  declare cpf: string

  @column()
  declare dataNascimento: string

  @column()
  declare nacionalidade: string

  @column()
  declare vooId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Voo)
  declare voo: BelongsTo<typeof Voo>

  @hasMany(() => Bagagen)
  declare bagagens: HasMany<typeof Bagagen>
}
