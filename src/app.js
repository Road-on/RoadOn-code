const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

require('../src/auth')(passport)

app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 60 * 1000 }//30min
 }))

 app.use(passport.initialize());
 app.use(passport.session());

// Função Middleware de validação
// function authenticationMiddleware(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/login?fail=false');
// }

// --> Rotas da API

const index = require('./routes/index');
const indexRouter = require('./routes/index.routes');
const dashboardRoute = require('./routes/dashboard.routes')
const empresaRoute = require('./routes/empresa.routes')
const alterarEmpresaRoute = require('./routes/alterar-empresa.routes')
const destinoRoute = require('./routes/destino.routes')
const registrarDestinoRoute = require('./routes/registrar-destino.routes')
const alterarDestinoRoute = require('./routes/alterar-destino.routes')
const agendarRoute = require('./routes/agendar.routes')
const reagendarRoute = require('./routes/reagendar.routes')
const agendadosRoute = require('./routes/agendados.routes')
const turistaRoute = require('./routes/turista.routes')
const editarTuristaRoute = require('./routes/editar-turista.routes')
const loginRoute = require('./routes/login.routes')
//const passport = require('passport')
//const session = require('express-session')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
// MAgica da sessao de login na mexer




//function authenticationMiddleware(req, res, next) {
 // if (req.isAuthenticated()) return next();
 // res.redirect('/login?fail=true');
//}


// fim da magica 


app.set('views','src/views') 
app.set('view-engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.use(express.static('src'));

// => Requisição API (Testes Postman)
app.use(index);
app.use('/api/', destinoRoute);
app.use('/api/', agendarRoute);
app.use('/api/', turistaRoute);
app.use('/api/', empresaRoute)

// ==> Telas

app.use(agendarRoute);
//app.use(authenticationMiddleware, indexRouter)
app.use(indexRouter)
app.use(reagendarRoute);
app.use(agendadosRoute);
app.use(destinoRoute);
app.use(registrarDestinoRoute);
app.use(alterarDestinoRoute);
app.use(dashboardRoute);
app.use(empresaRoute);
app.use(alterarEmpresaRoute);
app.use(turistaRoute);
app.use(editarTuristaRoute);
app.use(loginRoute);

module.exports = app;