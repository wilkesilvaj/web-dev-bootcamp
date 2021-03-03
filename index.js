const express = require('express');
const app = express();
const path = require("path");

const comments = [
    {
        username: 'Todd', 
        comment: 'lool that is very funny!'
    },
    {
        username: 'Brock', 
        comment: 'OMG that is craaaaaaaaaaaaazy!'
    },
    {
        username: 'Laura', 
        comment: 'Well, I do love to go skiing'
    },
    {
        username: 'Bob', 
        comment: 'Man, I sure miss not having these COVID restrinctions!'
    },
    {
        username: 'Mandy', 
        comment: 'Work has been so stressful lately!'
    }
]

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route of GET requests of /tacos
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response!');
});

// Route to LIST all comments
app.get('/comments', (req, res) =>  {
    res.render('comments/index', {comments})
})

app.listen(3000, () =>  {
    console.log('Listening to port 3000!');
});