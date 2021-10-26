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
router.get('/', (req, res) => {
	res.render('agendados.ejs')
})
// ==> Rota responsável por listar todas os Agendamento: (GET): localhost:3000/api/agendar
router.get('/agendados', agendarController.listAllExcursoes)

// ==> Rota responsável por selecionar Agendamento pelo 'Id': (GET): localhost:3000/api/agendar/:id
router.get('/agendados/:id', agendarController.findExcursaoById)

module.exports = router;