// @ts-nocheck
/**
 * Arquivo: src/routes/agendar.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Agenda_Excursao'.
 * Data: 25/10/2021
 * Author: Fabio Santos
 */
 const router = require('express-promise-router')()
 const db = require('../database')

 const agendarController = require('../controllers/agendar.controller')

 // ==> Renderização de rota:
router.get('/reagendar', async (req, res) => {
	const { id_empresa } = req.user;
	id_excursao = parseInt(req.query.excursao);
    const response = await db.query('SELECT * FROM agenda_excursao INNER JOIN destino ON destino.id_destino = agenda_excursao.id_destino WHERE agenda_excursao.id_excursao  = $1 AND agenda_excursao.id_empresa = $2', [id_excursao, id_empresa]);
	res.render('reagendar-destino.ejs', { model: response.rows})
})

router.post('/reagendar', agendarController.updateAgendamentoById)

// ==> Rota responsável por atualizar Agendamento pelo 'Id': (PUT): localhost: 3000/api/agendar/:id
router.put('/reagendar/:id', agendarController.updateAgendamentoById)

// ==> Rota responsável por excluir Agendamento pelo 'Id': (DELETE): localhost:3000/api/agendar/:id
router.delete('/reagendar/:id', agendarController.deleteAgendamentoById)


module.exports = router;