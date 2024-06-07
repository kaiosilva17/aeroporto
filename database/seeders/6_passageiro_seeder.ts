import Passageiro from '#models/passageiro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Passageiro.createMany([
      {
        nome: 'Pedro',
        sobrenome: 'Silva',
        cpf: '12345678901',
        dataNascimento: '2000-01-01',
        nacionalidade: 'Brasil',
        vooId: 1,
      },
      {
        nome: 'Joaquim',
        sobrenome: 'Ferreira',
        cpf: '12345678901',
        dataNascimento: '1990-12-09',
        nacionalidade: 'Espanha',
        vooId: 2,
      },
    ])
  }
}
