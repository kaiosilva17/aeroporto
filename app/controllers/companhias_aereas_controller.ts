import CompanhiasAerea from '#models/companhias_aerea'
import type { HttpContext } from '@adonisjs/core/http'

export default class CompanhiasAereasController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await CompanhiasAerea.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await CompanhiasAerea.query().where('id', params.id).preload('aeronaves')
                                                                    .preload('funcionarios')
                                                                    .preload('voos')
                                                                    .firstOrFail()
    }

    async store({ request }: HttpContext) {
        const data = request.only(['nome', 'pais'])
        return await CompanhiasAerea.create(data)
    }

    async update({ params, request }: HttpContext) {
        const companhiasaerea = await CompanhiasAerea.findOrFail(params.id)
        const data = request.only(['nome', 'pais'])

        companhiasaerea.merge(data)
        await companhiasaerea.save()
        return companhiasaerea
    }

    async destroy({ params }: HttpContext) {
        const companhiasaerea = await CompanhiasAerea.findOrFail(params.id)

        await companhiasaerea.delete()
        return { message: 'Portão de embarque deletado com sucesso', companhiasaerea }
    }
}
