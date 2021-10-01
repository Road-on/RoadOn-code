// @ts-nocheck
/**
    * Arquivo: src/routes/destino.routes.js
    * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Destino'.
    * Data: 30/09/2021
    * Author: Fabio Santos
 */
 const router = require('express-promise-router')();

 const destinoController = require('../controllers/destino.controller');
 // ==> Definindo as rotas do CRUD - 'Destino':

 // ==> Rota responsável por criar uma nova Destino: (POST): localhost:3000/api/destinos
 router.post('/destinos', destinoController.createDestino);
 
 // ==> Rota responsável por listar todas as Destinos: (GET): localhost:3000/api/destinos
router.get('/destinos', destinoController.listAllDestinos);

// ==> Rota responsável por selecionar Destino pelo 'Id': (GET): localhost:3000/api/destinos/:id
router.get('/destinos/:id', destinoController.findDestinoById);

// ==> Rota responsável por atualizar Destino pelo 'Id': (PUT): localhost: 3000/api/destinos/:id
router.put('/destinos/:id', destinoController.updateDestinoById);

// ==> Rota responsável por excluir Destino pelo 'Id': (DELETE): localhost:3000/api/destinos/:id
router.delete('/destinos/:id', destinoController.deleteDestinoById);

module.exports = router;