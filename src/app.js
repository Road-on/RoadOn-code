const express = require('express');
const cors = require('cors');

const app = express();

// --> Rotas da API

const index = require('./routes/index');
const empresaRoute = require('./routes/empresa.routes')
const destinoRoute = require('./routes/destino.routes')
const agendaExcursaoRoute = require('./routes/agendaExcursao.routes')
const pessoaRoute = require('./routes/pessoa.routes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
 
app.set('view-engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index.ejs', {nome: 'João'});
})

app.get('/registrar-empresa', (req, res) => {
  res.render('registrar-empresa.ejs', {titulo: 'Registro de Empresa'});
})

app.get('/login', (req, res) => {
  res.render('login.ejs', {titulo: 'João'});
})

app.use(express.static('./front-end'));

app.use(index);
app.use('/api/', empresaRoute)
app.use(empresaRoute);
app.use('/api/', destinoRoute);
app.use('/api/', agendaExcursaoRoute);
app.use('/api/', pessoaRoute);

module.exports = app;