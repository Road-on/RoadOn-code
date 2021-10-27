// @ts-nocheck
/**
 * Arquivo: src/routes/destino.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Destino'.
 * Data: 30/09/2021
 * Author: Fabio Santos
 */
 const router = require('express-promise-router')()

// ==> Renderização de rota:
router.get('/', (req, res) => {
	res.render('dashboard.ejs')
})

module.exports = router