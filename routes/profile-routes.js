const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        // if user not logged in
         res.redirect('/auth/login');
    } else {
        next();
    }

};

router.get('/', authCheck, (req, res) => {
    res.send('you are logged in as: ' + req.user.username)
});

module.exports = router;