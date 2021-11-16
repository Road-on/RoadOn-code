// @ts-nocheck
/**
 * Arquivo: src/routes/destino.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Destino'.
 * Data: 30/09/2021
 * Author: Fabio Santos
 */
const router = require('express-promise-router')()

const destinoController = require('../controllers/destino.controller')
// ==> Renderização de rota:
router.get('/destinos', destinoController.listAllDestinos )

// ==> Rota responsável por criar uma nova Destino: (POST): localhost:3000/api/destinos
 router.post('/destinos', destinoController.createDestino)

// ==> Rota responsável por selecionar Destino pelo 'Id': (GET): localhost:3000/api/destinos/:id
router.get('/destinos/:id', destinoController.findDestinoById)

router.get('/destinos/excluir/:id', destinoController.deleteDestinoById)


module.exports = router
