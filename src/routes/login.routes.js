const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET login page. */
router.get('/login', (req, res, next) => {
    if (req.query.fail)
        res.render('login.ejs', { fail: true, cadastro: false, title: 'RoadOn - Login' });
    else if (req.query.cadastro)
        res.render('login.ejs', { fail: false, cadastro: true, title: 'RoadOn - Login' });
    else
        res.render('login.ejs', { fail: false, cadastro: false, title: 'RoadOn - Login' });
});

/* POST login page */
router.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/index', 
        failureRedirect: '/login?fail=true' 
    })
);

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy((err) => {
      res.clearCookie('connect.sid');
      // Don't redirect, just print text
      res.redirect('/')
    });
  });

module.exports = router;