import Bagagen from '#models/bagagen'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Bagagen.createMany([
      { passageiroId: 1, peso: 10, tamanho: 'Pequeno' },
      { passageiroId: 2, peso: 30, tamanho: 'Medio' },
    ])
  }
}
