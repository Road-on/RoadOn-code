// @ts-nocheck
/**
 * Arquivo: src/routes/destino.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Destino'.
 * Data: 30/09/2021
 * Author: Fabio Santos
 */
 const router = require('express-promise-router')()

 const destinoController = require('../controllers/destino.controller')
 // ==> Renderização de rota:
 router.get('/', (req, res) => {
     res.render('registrar-destino.ejs')
 })
 
 // ==> Rota responsável por criar uma nova Destino: (POST): localhost:3000/api/destinos
 router.post('/destinos', destinoController.createDestino)

 module.exports = router