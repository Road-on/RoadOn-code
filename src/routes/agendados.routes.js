// @ts-nocheck
/**
 * Arquivo: src/routes/agendar.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Agenda_Excursao'.
 * Data: 25/10/2021
 * Author: Fabio Santos
 */
const router = require('express-promise-router')()

const agendarController = require('../controllers/agendar.controller')

router.get('/agendados', agendarController.listAllAgendamentos)

router.get('/consulta-agendamento', agendarController.findAgendamentoById)

router.get('/cancelar-agendamento', agendarController.deleteAgendamentoById)

module.exports = router
