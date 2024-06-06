import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Aeronave from './aeronave.js'
import CompanhiasAerea from './companhias_aerea.js'
import PortoesEmbarque from './portoes_embarque.js'
import Passageiro from './passageiro.js'

export default class Voo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numeroVoo: string

  @column()
  declare origem: string

  @column()
  declare destino: string

  @column.dateTime()
  declare dataPartida: DateTime

  @column.dateTime()
  declare dataChegada: DateTime

  @column()
  declare aeronaveId: number

  @column()
  declare companhiaId: number

  @column()
  declare portaoEmbarqueId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Aeronave)
  declare aeronave: BelongsTo<typeof Aeronave>

  @belongsTo(() => CompanhiasAerea)
  declare companhia: BelongsTo<typeof CompanhiasAerea>

  @belongsTo(() => PortoesEmbarque)
  declare portaoEmbarque: BelongsTo<typeof PortoesEmbarque>

  @hasMany(() => Passageiro)
  declare passageiros: HasMany<typeof Passageiro>
}
