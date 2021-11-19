// @ts-nocheck
/**
 * Arquivo: src/routes/empresa.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Empresa'.
 * Data: 10/09/2021
 * Author: Fabio Santos / Gustavo Morais
 */
const router = require('express-promise-router')()

const empresaController = require('../controllers/empresa.controller')

router.get('/alterar-empresa', empresaController.findEmpresaById)

router.post('/alterar-empresa', empresaController.updateEmpresaById)

module.exports = router
