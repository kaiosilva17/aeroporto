/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BagagensController from '../app/controllers/bagagens_controller.js'
import AeronavesController from '../app/controllers/aeronaves_controller.js'
import router from '@adonisjs/core/services/router'
import CompanhiasAereasController from '../app/controllers/companhias_aereas_controller.js'
import VoosController from '../app/controllers/voos_controller.js'
import PortoesEmbarquesController from '../app/controllers/portoes_embarques_controller.js'
import PassageirosController from '../app/controllers/passageiros_controller.js'
import FuncionariosController from '../app/controllers/funcionarios_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/aeronaves', AeronavesController).apiOnly()
router.resource('/bagagens', BagagensController).apiOnly()
router.resource('/companhias', CompanhiasAereasController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/passageiros', PassageirosController).apiOnly()
router.resource('/portoes', PortoesEmbarquesController).apiOnly()
router.resource('/voos', VoosController).apiOnly()
