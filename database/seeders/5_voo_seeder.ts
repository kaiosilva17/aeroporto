import Voo from '#models/voo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Voo.createMany([
      {
        numeroVoo: 'Voo 1',
        origem: 'São Paulo',
        destino: 'Rio de Janeiro',
        dataPartida: '2022-01-01',
        dataChegada: '2022-01-01',
        aeronaveId: 1,
        companhiaAereaId: 1,
        portaoEmbarqueId: 1,
      },
      {
        numeroVoo: 'Voo 2',
        origem: 'Brasília',
        destino: 'Bahia',
        dataPartida: '2022-09-12',
        dataChegada: '2022-07-10',
        aeronaveId: 2,
        companhiaAereaId: 2,
        portaoEmbarqueId: 2,
      },
    ])
  }
}
