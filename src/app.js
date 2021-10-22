const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

require('../auth')(passport);
app.use(session({
  store: new (require('connect-pg-simple')(session))(),//usa process.env.DATABASE_URL internamente
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 60 * 1000 }//30min
}))
app.use(passport.initialize());
app.use(passport.session());

function authenticationMiddleware(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login?fail=true');
}

// --> Rotas da API

const index = require('./routes/index');
const empresaRoute = require('./routes/empresa.routes')
const destinoRoute = require('./routes/destino.routes')
const agendaExcursaoRoute = require('./routes/agendaExcursao.routes')
const pessoaRoute = require('./routes/pessoa.routes')
const loginRoute = require('./routes/login.routes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

// app.use('/login', loginRouter);
// app.use('/users', authenticationMiddleware, usersRouter);
// app.use('/', authenticationMiddleware,  indexRouter);
 
app.set('view-engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index.ejs', {nome: 'João'});
})

app.get('/registrar-empresa', (req, res) => {
  res.render('registrar-empresa.ejs', {titulo: 'Registro de Empresa'});
})

app.use(express.static('./front-end'));

app.use(index);
app.use('/api/', empresaRoute)
app.use(empresaRoute);
app.use('/api/', destinoRoute);
app.use('/api/', agendaExcursaoRoute);
app.use('/api/', pessoaRoute);
app.use('/login', loginRoute);

module.exports = app;