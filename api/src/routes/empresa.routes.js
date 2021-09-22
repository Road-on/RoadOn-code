// @ts-nocheck
/**
    * Arquivo: src/routes/empresa.routes.js
    * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Empresa'.
    * Data: 10/09/2021
    * Author: Fabio Santos / Gustavo Morais
 */
 const router = require('express-promise-router')();

 const empresaController = require('../controllers/empresa.controller');
 // ==> Definindo as rotas do CRUD - 'Empresa':

 // ==> Rota responsável por criar uma nova Empresa: (POST): localhost:3000/api/empresas
 router.post('/empresas', empresaController.createEmpresa);
 // ==> Rota responsável por listar todas as Empresas: (GET): localhost:3000/api/empresas
router.get('/empresas', empresaController.listAllEmpresas);

// ==> Rota responsável por selecionar Empresa pelo 'Id': (GET): localhost:3000/api/empresas/:id
router.get('/empresas/:id', empresaController.findEmpresaById);

// ==> Rota responsável por atualizar Empresa pelo 'Id': (PUT): localhost: 3000/api/empresas/:id
router.put('/empresas/:id', empresaController.updateEmpresaById);

// ==> Rota responsável por excluir Empresa pelo 'Id': (DELETE): localhost:3000/api/empresas/:id
router.delete('/empresas/:id', empresaController.deleteEmpresaById);

module.exports = router;