// @ts-nocheck
/**
 * Arquivo: src/routes/empresa.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Empresa'.
 * Data: 10/09/2021
 * Author: Fabio Santos / Gustavo Morais
 */
const router = require('express-promise-router')()

const empresaController = require('../controllers/empresa.controller')

// ==> Renderização de rota:
router.get('/registrar-empresa', (req, res) => {
	res.render('registrar-empresa.ejs')
})

// ==> Rota responsável por criar uma nova Empresa: (POST): localhost:3000/api/empresas
router.post('/registrar-empresa', empresaController.createEmpresa)

// ==> Rota responsável por listar todas as Empresas: (GET): localhost:3000/api/empresas
router.get('/registrar-empresa', empresaController.listAllEmpresas)

module.exports = router
