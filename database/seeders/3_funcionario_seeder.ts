import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      { nome: 'Kaio', cargo: 'Piloto', companhiaAereaId: 1 },
      { nome: 'Arthur', cargo: 'Co-piloto', companhiaAereaId: 2 },
    ])
  }
}
