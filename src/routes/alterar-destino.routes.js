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
 router.get('/', (req, res) => {
     res.render('alterar-destino.ejs')
 })
 
// ==> Rota responsável por selecionar Destino pelo 'Id': (GET): localhost:3000/api/destinos/:id
router.get('/destinos/:id', destinoController.findDestinoById)

 // ==> Rota responsável por atualizar Destino pelo 'Id': (PUT): localhost: 3000/api/alterar-destino/:id
router.put('/alterar-destino/:id', destinoController.updateDestinoById)

// ==> Rota responsável por excluir Destino pelo 'Id': (DELETE): localhost:3000/api/alterar-destino/:id
router.delete('/alterar-destino/:id', destinoController.deleteDestinoById)

module.exports = router
