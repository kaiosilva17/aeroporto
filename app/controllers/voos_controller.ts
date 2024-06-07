import Voo from '../models/voo.js'
import type { HttpContext } from '@adonisjs/core/http'

export default class VoosController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Voo.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Voo.query()
      .where('id', params.id)
      .preload('aeronave')
      .preload('companhia')
      .preload('portaoEmbarque')
      .firstOrFail()
  }

  async store({ request }: HttpContext) {
    const data = request.only([
      'numeroVoo',
      'origem',
      'destino',
      'dataPartida',
      'dataChegada',
      'aeronaveId',
      'companhiaAereaId',
      'portaoEmbarqueId',
    ])
    return await Voo.create(data)
  }

  async update({ params, request }: HttpContext) {
    const voo = await Voo.findOrFail(params.id)
    const data = request.only([
      'numeroVoo',
      'origem',
      'destino',
      'dataPartida',
      'dataChegada',
      'aeronaveId',
      'companhiaAereaId',
      'portaoEmbarqueId',
    ])

    voo.merge(data)
    await voo.save()
    return voo
  }

  async destroy({ params }: HttpContext) {
    const voo = await Voo.findOrFail(params.id)

    await voo.delete()
    return { message: 'Voo deletado com sucesso', voo }
  }
}
