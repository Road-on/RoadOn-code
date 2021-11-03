// @ts-nocheck
/**
 * Arquivo: src/routes/agendar.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Agenda_Excursao'.
 * Data: 25/10/2021
 * Author: Fabio Santos
 */
 const router = require('express-promise-router')()

 const agendarController = require('../controllers/agendar.controller')

 // ==> Renderização de rota:
router.get('/agendados', agendarController.listAllAgendamentos)

// ==> Rota responsável por selecionar Agendamento pelo 'Id': (GET): localhost:3000/api/agendar/:id
router.get('/agendados/:id', agendarController.findAgendamentoById)

module.exports = router;