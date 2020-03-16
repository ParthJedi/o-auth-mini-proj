const router = require('express').Router();

// login page
router.get('/login', (req, res) => {
    res.render('login');
})

// logout page
router.get('/logout', (req, res) => {
    // passport handler
    res.send("logging out");
})

// o-auth Google handler
router.get('/google', (req, res) => {
    // passport handler
    res.send("logging with Google");

})

// o-auth Facebook handler
router.get('/facebook', (req, res) => {
    // passport handler
    res.send("logging with Facebook");

})

module.exports = router;
