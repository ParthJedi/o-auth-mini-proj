const router = require('express').Router();
const passport = require('passport');

// login page
router.get('/login', (req, res) => {
    res.render('login', {user: req.user});
})

// logout page
router.get('/logout', (req, res) => {
    // passport handler
    req.logout();
    res.redirect('/');
})

// o-auth Google handler
router.get('/google', passport.authenticate('google', {
     scope: ['profile']
    })
);

router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
    //  res.send(req.user);
     res.redirect('/profile/');
})

module.exports = router;
