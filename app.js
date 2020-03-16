const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// setting up a view engine
app.set('view engine', 'ejs');

// connecting to the db
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('db connected!');
})

//  setting up auth routes
app.use('/auth', authRoutes);

// home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('server running at port 3000');
})