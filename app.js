const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');

const app = express();

// setting up a view engine
app.set('view engine', 'ejs');

// set cookieSession
app.use(cookieSession({
    maxAge: 24*3600*1000,
    keys: [keys.session.key]
}));

// initializing passport
app.use(passport.initialize());
// use session cookies
app.use(passport.session());

// connecting to the db
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('db connected!');
},
{ useNewUrlParser: true });

//  setting up auth routes
app.use('/auth', authRoutes);

// setting up profile routes
app.use('/profile', profileRoutes);

// home route
app.get('/', (req, res) => {
    res.render('home');
})

// port setting 
app.listen(3000, () => {
    console.log('server running at port 3000');
})