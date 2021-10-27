// @ts-nocheck
/**
 * Arquivo: src/routes/turista.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Pessoa'.
 * Data: 02/10/2021
 * Author: Gustavo Morais
 */
 const router = require('express-promise-router')()

 const turistaController = require('../controllers/turista.controller')
 // ==> Renderização de rota:
 router.get('/', (req, res) => {
     res.render('editar-turista.ejs')
 }) 

 // ==> Rota responsável por selecionar Pessoa pelo 'Id': (GET): localhost:3000/api/turistas/:id
 router.get('/turistas/:id', turistaController.findPessoaById)
 
 // ==> Rota responsável por atualizar Pessoa pelo 'Id': (PUT): localhost: 3000/api/turistas/:id
 router.put('/turistas/:id', turistaController.updatePessoaoById)
 
 // ==> Rota responsável por excluir Pessoa pelo 'Id': (DELETE): localhost:3000/api/turistas/:id
 router.delete('/turistas/:id', turistaController.deletePessoaById)
 
 module.exports = router
 