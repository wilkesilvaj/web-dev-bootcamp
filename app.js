const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// This gets the directory name which 'app.js' is stored, and adds '/views' for the views root directory
app.set('views',path.join(__dirname, '/views'));

// This is the response from the server for the 'home' in our localhost:3000
app.get('/', (req, res) =>  {
    res.render('home.ejs');
});

// This is the response for requests for 'localhost:3000/r/anythingHere'
app.get('/r/:subreddit', (req, res) =>  {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
});

// This is the response for requests for 'localhost:3000/cats'
app.get('/cats', (req, res) =>  {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats', {cats});
});


// This is the response for requests for 'localhost:3000/rand'
app.get('/rand', (req, res) =>  {
    const num = Math.floor(Math.random() * 10) +1;
    res.render('random.ejs', {num});
});

app.listen(3000, () =>  {
    console.log('Listening on port 3000');
});