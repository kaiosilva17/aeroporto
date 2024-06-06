 import Passageiro from '#models/passageiro'
import type { HttpContext } from '@adonisjs/core/http'

export default class PassageirosController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Passageiro.query().paginate(page, perPage)
      }
    
      async show({ params }: HttpContext) {
        return await Passageiro.query().where('id', params.id).preload('bagagens').firstOrFail()
      }
    
      async store({ request }: HttpContext) {
        const data = request.only(['nome', 'soobrenome', 'cpf', 'dataNascimento', 'nacionalidade', 'vooId'])
        return await Passageiro.create(data)
      }
    
      async update({ params, request }: HttpContext) {
        const passageiro = await Passageiro.findOrFail(params.id)
        const data = request.only(['nome', 'soobrenome', 'cpf', 'dataNascimento', 'nacionalidade', 'vooId'])
    
        passageiro.merge(data)
        await passageiro.save()
        return passageiro
      }
    
      async destroy({ params }: HttpContext) {
        const passageiro = await Passageiro.findOrFail(params.id)
    
        await passageiro.delete()
        return { message: 'Portão de embarque deletado com sucesso', passageiro }
      }
}