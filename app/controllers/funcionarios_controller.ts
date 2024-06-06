 import Funcionario from '#models/funcionario'
import type { HttpContext } from '@adonisjs/core/http'

export default class FuncionariosController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Funcionario.query().paginate(page, perPage)
      }
    
      async show({ params }: HttpContext) {
        return await Funcionario.findOrFail(params.id)
      }
    
      async store({ request }: HttpContext) {
        const data = request.only(['nome', 'soobrenome', 'cargo', 'companhiaId'])
        return await Funcionario.create(data)
      }
    
      async update({ params, request }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)
        const data = request.only(['nome', 'soobrenome', 'cargo', 'companhiaId'])
    
        funcionario.merge(data)
        await funcionario.save()
        return funcionario
      }
    
      async destroy({ params }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)
    
        await funcionario.delete()
        return { message: 'Portão de embarque deletado com sucesso', funcionario }
      }
}