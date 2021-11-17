const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET login page. */
router.get('/login', (req, res, next) => {
    if (req.query.fail)
        res.render('login.ejs', { message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('login.ejs', { message: null });
});

/* POST login page */
router.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/index', 
        failureRedirect: '/login?fail=true' 
    })
);

module.exports = router;