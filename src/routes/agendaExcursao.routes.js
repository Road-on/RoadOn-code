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

 // ==> Rota responsável por criar uma nova Excursão: (POST): localhost:3000/api/agenda_excursao
 router.post('/agenda_excursao', agendaExcursaoController.createExcursao);
 
 // ==> Rota responsável por listar todas as Excursão: (GET): localhost:3000/api/agenda_excursao
router.get('/agenda_excursao', agendaExcursaoController.listAllExcursoes);

// ==> Rota responsável por selecionar Excursão pelo 'Id': (GET): localhost:3000/api/agenda_excursao/:id
router.get('/agenda_excursao/:id', agendaExcursaoController.findExcursaoById);

// ==> Rota responsável por atualizar Excursão pelo 'Id': (PUT): localhost: 3000/api/agenda_excursao/:id
router.put('/agenda_excursao/:id', agendaExcursaoController.updateExcursaoById);

// ==> Rota responsável por excluir Excursão pelo 'Id': (DELETE): localhost:3000/api/agenda_excursao/:id
router.delete('/agenda_excursao/:id', agendaExcursaoController.deleteExcursaoById);

module.exports = router;