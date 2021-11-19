// @ts-nocheck
/**
 * Arquivo: src/routes/turista.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Pessoa'.
 * Data: 02/10/2021
 * Author: Gustavo Morais
 */
const router = require('express-promise-router')()

const turistaController = require('../controllers/turista.controller')

router.get('/editar-turista', turistaController.findPessoaById)

router.post('/editar-turista', turistaController.updatePessoaById)

router.get('/remover-turista', turistaController.deletePessoaById)

module.exports = router
