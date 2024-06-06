import PortoesEmbarque from '#models/portoes_embarque'
import type { HttpContext } from '@adonisjs/core/http'

export default class PortoesEmbarquesController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await PortoesEmbarque.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await PortoesEmbarque.query().where('id', params.id).preload('voos').firstOrFail()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['terminal', 'numero'])
    return await PortoesEmbarque.create(data)
  }

  async update({ params, request }: HttpContext) {
    const portoesEmbarque = await PortoesEmbarque.findOrFail(params.id)
    const data = request.only(['terminal', 'numero'])

    portoesEmbarque.merge(data)
    await portoesEmbarque.save()
    return portoesEmbarque
  }

  async destroy({ params }: HttpContext) {
    const portoesEmbarque = await PortoesEmbarque.findOrFail(params.id)

    await portoesEmbarque.delete()
    return { message: 'Portão de embarque deletado com sucesso', portoesEmbarque }
  }
}
