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

app.use(index);
app.use('/api/', empresaRoute);
app.use('/api/', destinoRoute);
app.use('/api/', agendaExcursaoRoute);
app.use('/api/', pessoaRoute);

module.exports = app;