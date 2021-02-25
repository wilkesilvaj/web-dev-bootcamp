const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// This gets the directory name which 'app.js' is stored, and adds '/views' for the views root directory
app.set('views',path.join(__dirname, '/views'));


app.get('/', (req, res) =>  {
    res.render('home.ejs');
});

app.listen(3000, () =>  {
    console.log('Listening on port 3000');
});