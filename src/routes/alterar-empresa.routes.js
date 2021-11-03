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
 router.get('/alterar-empresa', (req, res) => {
     res.render('alterar-empresa.ejs')
 })

// ==> Rota responsável por selecionar Empresa pelo 'Id': (GET): localhost:3000/api/empresas/:id
router.get('/registrar-empresa:id', empresaController.findEmpresaById)
 
// ==> Rota responsável por atualizar Empresa pelo 'Id': (PUT): localhost: 3000/api/empresas/:id
router.put('/alterar-empresa:id', empresaController.updateEmpresaById)

// ==> Rota responsável por excluir Empresa pelo 'Id': (DELETE): localhost:3000/api/empresas/:id
router.delete('/alterar-empresa:id', empresaController.deleteEmpresaById)

module.exports = router
