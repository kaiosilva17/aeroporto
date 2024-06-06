 import Bagagen from '#models/bagagen'
import type { HttpContext } from '@adonisjs/core/http'

export default class BagagensController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Bagagen.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Bagagen.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const data = request.only(['passageiroId', 'peso', 'tamanho'])
        return await Bagagen.create(data)
    }

    async update({ params, request }: HttpContext) {
        const bagagen = await Bagagen.findOrFail(params.id)
        const data = request.only(['passageiroId', 'peso', 'tamanho'])

        bagagen.merge(data)
        await bagagen.save()
        return bagagen
    }

    async destroy({ params }: HttpContext) {
        const bagagen = await Bagagen.findOrFail(params.id)

        await bagagen.delete()
        return { message: 'Portão de embarque deletado com sucesso', bagagen }
    }
}