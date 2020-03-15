const express = require('express');
const app = express();

// setting up a view engine
app.set('view engine', 'ejs');

// home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('server running at port 3000');
})