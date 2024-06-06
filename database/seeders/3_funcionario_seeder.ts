import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {nome: 'Kaio', sobrenome: 'Filho', cargo: 'Piloto', companhiaId: 1},
      {nome: 'Arthur', sobrenome: 'Junior', cargo: 'Co-piloto', companhiaId: 2},
    ])
  }
}
