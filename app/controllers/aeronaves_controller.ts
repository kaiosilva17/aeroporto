 import Aeronave from '#models/aeronave'
import type { HttpContext } from '@adonisjs/core/http'

export default class AeronavesController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Aeronave.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Aeronave.query().where('id', params.id).preload('voos').firstOrFail()
    }

    async store({ request }: HttpContext) {
        const data = request.only(['modelo', 'capacidade', 'anoFabricacao', 'companhiaId'])
        return await Aeronave.create(data)
    }

    async update({ params, request }: HttpContext) {
        const aeronave = await Aeronave.findOrFail(params.id)
        const data = request.only(['modelo', 'capacidade', 'anoFabricacao', 'companhiaId'])

        aeronave.merge(data)
        await aeronave.save()
        return aeronave
    }

    async destroy({ params }: HttpContext) {
        const aeronave = await Aeronave.findOrFail(params.id)

        await aeronave.delete()
        return { message: 'Portão de embarque deletado com sucesso', aeronave }
    }
}