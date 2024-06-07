import Aeronave from '#models/aeronave'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Aeronave.createMany([
      { modelo: 'Boeing 747', capacidade: 300, anoFabricacao: 2020, companhiaAereaId: 1 },
      { modelo: 'Boeing 777', capacidade: 250, anoFabricacao: 2002, companhiaAereaId: 2 },
    ])
  }
}
