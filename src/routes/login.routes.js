const express = require('express');
const router = require('express-promise-router')()
const passport = require('passport');

/* GET login page. */
router.get('/login', (req, res, next) => {
    if (req.query.fail)
        res.render('login.ejs', { message: 'Login Inválido! Email e/ou senha incorretos!' });
    else
        res.render('login.ejs', { message: null });
});

/* POST login page */
router.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/', 
        failureRedirect: '/login?fail=true' 
    })
);

module.exports = router;