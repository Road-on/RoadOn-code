// @ts-nocheck
/**
    * Arquivo: src/routes/empresa.routes.js
    * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Empresa'.
    * Data: 10/09/2021
    * Author: Fabio Santos
 */
 const router = require('express-promise-router')();
 const empresaController = require('../controllers/empresa.controller');
 // ==> Definindo as rotas do CRUD - 'Empresa':
 // ==> Rota responsável por criar uma nova Empresa: (POST): localhost:3000/api/empresas
 router.post('/empresas', empresaController.createEmpresa);
 module.exports = router;