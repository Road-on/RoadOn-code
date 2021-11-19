// @ts-nocheck
/**
 * Arquivo: src/routes/turista.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Pessoa'.
 * Data: 02/10/2021
 * Author: Gustavo Morais
 */
const router = require('express-promise-router')()

const turistaController = require('../controllers/turista.controller')

// ==> Rota responsável por selecionar Pessoa pelo 'Id': (GET): localhost:3000/api/turistas/:id
router.get('/editar-turista', turistaController.findPessoaById)

// ==> Rota responsável por atualizar Pessoa pelo 'Id': (PUT): localhost: 3000/api/turistas/:id
router.post('/editar-turista', turistaController.updatePessoaById)

// ==> Rota responsável por excluir Pessoa pelo 'Id': (DELETE): localhost:3000/api/turistas/:id
router.get('/remover-turista', turistaController.deletePessoaById)

module.exports = router
