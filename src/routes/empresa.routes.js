// @ts-nocheck
/**
 * Arquivo: src/routes/empresa.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Empresa'.
 * Data: 10/09/2021
 * Author: Fabio Santos / Gustavo Morais
 */
const router = require('express-promise-router')()

const empresaController = require('../controllers/empresa.controller')

router.get('/registrar-empresa', (req, res) => {
	if (req.query.existe){
		res.render('registrar-empresa.ejs', { cadastro: false, erro: false})
	}
	else if (req.query.erro) {
		res.render('registrar-empresa.ejs', { cadastro: true, erro: true})
	} else {
		res.render('registrar-empresa.ejs', { cadastro: true, erro: false})
	}
})

router.post('/registrar-empresa', empresaController.createEmpresa)

module.exports = router
