// @ts-nocheck
/**
 * Arquivo: src/routes/destino.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Destino'.
 * Data: 30/09/2021
 * Author: Fabio Santos
 */
 const router = require('express-promise-router')()
 const dashboardController = require('../controllers/dashboard.controller')

// ==> Renderização de rota:
router.get('/dashboard', dashboardController.populaDados)

module.exports = router