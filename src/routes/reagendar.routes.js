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
router.get('/reagendar', (req, res) => {
	res.render('reagendar-destino.ejs')
})

// ==> Rota responsável por atualizar Agendamento pelo 'Id': (PUT): localhost: 3000/api/agendar/:id
router.put('/reagendar/:id', agendarController.updateExcursaoById)

// ==> Rota responsável por excluir Agendamento pelo 'Id': (DELETE): localhost:3000/api/agendar/:id
router.delete('/reagendar/:id', agendarController.deleteExcursaoById)


module.exports = router;