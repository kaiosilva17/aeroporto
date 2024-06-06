import CompanhiasAerea from '#models/companhias_aerea'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await CompanhiasAerea.createMany([
      {nome: 'TAM', pais: 'Brasil'},
      {nome: 'Emirates', pais: 'Dubai'},
    ])
  }
}
