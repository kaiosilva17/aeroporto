import PortoesEmbarque from '#models/portoes_embarque'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await PortoesEmbarque.createMany([
      { terminal: 'Terminal 1', numero: 1 },
      { terminal: 'Terminal 2', numero: 2 },
    ])
  }
}
