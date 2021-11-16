// @ts-nocheck
/**
 * Arquivo: src/routes/turista.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Pessoa'.
 * Data: 02/10/2021
 * Author: Gustavo Morais
 */
const router = require('express-promise-router')()
const db = require('../config/database')

const turistaController = require('../controllers/turista.controller')
// ==> Renderização de rota:
router.get('/registrar-turista', async (req, res) => {
	const response = await db.query('SELECT * FROM agenda_excursao ORDER BY data_saida_excursao ASC');
	res.render('registrar-turista.ejs', { model: response.rows })
})

// ==> Rota responsável por criar uma nova Pessoa: (POST): localhost:3000/api/turista
router.post('/registrar-turista', turistaController.createPessoa)

// ==> Rota responsável por listar todas as Pessoas: (GET): localhost:3000/api/turistas
router.get('/turistas', turistaController.findPessoaById)

module.exports = router
