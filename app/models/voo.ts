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

  @column()
  declare dataPartida: string

  @column()
  declare dataChegada: string

  @column()
  declare aeronaveId: number

  @column()
  declare companhiaAereaId: number

  @column()
  declare portaoEmbarqueId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Aeronave)
  declare aeronave: BelongsTo<typeof Aeronave>

  @belongsTo(() => CompanhiasAerea, {
    foreignKey: 'companhiaAereaId',
  })
  declare companhia: BelongsTo<typeof CompanhiasAerea>

  @belongsTo(() => PortoesEmbarque, {
    foreignKey: 'portaoEmbarqueId',
  })
  declare portaoEmbarque: BelongsTo<typeof PortoesEmbarque>

  @hasMany(() => Passageiro)
  declare passageiros: HasMany<typeof Passageiro>
}
