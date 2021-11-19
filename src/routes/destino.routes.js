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
router.get('/destinos', destinoController.listAllDestinos)

module.exports = router
