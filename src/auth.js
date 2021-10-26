const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    console.log('aqui eu chego')
    
    passport.serializeUser((empresa, done) => {
        // console.log('aqui eu morri'); ELE MORRE AQUI!!!!!!!!
        done(null, empresa.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const db = require('./src/config/database')
            const empresa = await db.findEmpresaById(id);
            done(null, empresa);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new LocalStrategy({
        emailField: 'email',
        passwordField: 'password'
    },
        async (email, password, done) => {
            try {
                const db = require('../config/database');
                const empresa = await db.findEmpresa(email);

                // empresa inexistente
                if (!empresa) { return done(null, false) }

                // comparando as senhas
                const isValid = bcrypt.compareSync(password, empresa.password);
                if (!isValid) return done(null, false)
                
                return done(null, empresa)
            } catch (err) {
                done(err, false);
            }
        }
    ));
}