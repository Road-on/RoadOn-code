/**
     * Arquivo: server.js
     * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
     * Data: 10/09/2021
     * Author: Fabio Santos
 */


const express = require('express');
const app = express();
app.set('view-engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index.ejs', {nome: 'João'});
})

app.get('/login', (req, res) => {
  res.render('login.ejs', {titulo: 'João'});
})
app.use(express.static(__dirname + '/front-end'));
app.listen(3000);