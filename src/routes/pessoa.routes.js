// @ts-nocheck
/**
    * Arquivo: src/routes/pessoa.routes.js
    * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Pessoa'.
    * Data: 02/10/2021
    * Author: Gustavo Morais
 */
 const router = require('express-promise-router')();

 const pessoaController = require('../controllers/pessoa.controller');
 // ==> Definindo as rotas do CRUD - 'Pessoa':

 // ==> Rota responsável por criar uma nova Pessoa: (POST): localhost:3000/api/pessoa
 router.post('/pessoas', pessoaController.createPessoa);
 
 // ==> Rota responsável por listar todas as Pessoas: (GET): localhost:3000/api/pessoas
router.get('/pessoas', pessoaController.listAllPessoas);

// ==> Rota responsável por selecionar Pessoa pelo 'Id': (GET): localhost:3000/api/pessoas/:id
router.get('/pessoas/:id', pessoaController.findPessoaById);

// ==> Rota responsável por atualizar Pessoa pelo 'Id': (PUT): localhost: 3000/api/pessoas/:id
router.put('/pessoas/:id', pessoaController.updatePessoaoById);

// ==> Rota responsável por excluir Pessoa pelo 'Id': (DELETE): localhost:3000/api/pessoas/:id
router.delete('/pessoas/:id', pessoaController.deletePessoaById);

module.exports = router;