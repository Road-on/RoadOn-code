// @ts-nocheck
/**
    * Arquivo: src/routes/agendaExcursao.routes.js
    * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Agenda_Excursao'.
    * Data: 02/10/2021
    * Author: Gustavo Morais
 */
 const router = require('express-promise-router')();

 const agendaExcursaoController = require('../controllers/agendaExcursao.controller');
 // ==> Definindo as rotas do CRUD - 'Excursões':

 // ==> Rota responsável por criar uma nova Excursão: (POST): localhost:3000/api/agendamentos
 router.post('/agendamentos', agendaExcursaoController.createExcursao);
 
 // ==> Rota responsável por listar todas as Excursão: (GET): localhost:3000/api/agendamentos
router.get('/agendamentos', agendaExcursaoController.listAllExcursoes);

// ==> Rota responsável por selecionar Excursão pelo 'Id': (GET): localhost:3000/api/agendamentos/:id
router.get('/agendamentos/:id', agendaExcursaoController.findExcursaoById);

// ==> Rota responsável por atualizar Excursão pelo 'Id': (PUT): localhost: 3000/api/agendamentos/:id
router.put('/agendamentos/:id', agendaExcursaoController.updateExcursaoById);

// ==> Rota responsável por excluir Excursão pelo 'Id': (DELETE): localhost:3000/api/agendamentos/:id
router.delete('/agendamentos/:id', agendaExcursaoController.deleteExcursaoById);

module.exports = router;