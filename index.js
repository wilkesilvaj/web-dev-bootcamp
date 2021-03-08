const express = require('express');
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

let comments = [
    {
        id: uuidv4(),
        username: 'Todd', 
        comment: 'lool that is very funny!'
    },
    {
        id: uuidv4(),
        username: 'Brock', 
        comment: 'OMG that is craaaaaaaaaaaaazy!'
    },
    {
        id: uuidv4(),
        username: 'Laura', 
        comment: 'Well, I do love to go skiing'
    },
    {
        id: uuidv4(),
        username: 'Bob', 
        comment: 'Man, I sure miss not having these COVID restrinctions!'
    },
    {
        id: uuidv4(),
        username: 'Mandy', 
        comment: 'Work has been so stressful lately!'
    }
]

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'))

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

// Route to allow users to make a new comment
app.get('/comments/new', (req, res) =>  {
    res.render('comments/new', {comments})
})

// Route to retrieve one specific comment based on ID
app.get('/comments/:id', (req, res) =>  {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})

// Route to update a comment
app.get('/comments/:id/edit', (req, res) =>  {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

// Patch Route (Update)
app.patch('/comments/:id', (req, res) =>    {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

// Delete Route for any comment
app.delete('/comments/:id', (req, res) =>    {
    const { id } = req.params;    
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})



// Route to handle the user input for a new comment (After going through /comments/new)
app.post('/comments', (req, res) =>  {
    // Destructures the values from the request's body
    const {username, comment} = req.body;
    // Pushes new comment into the array of comments
    comments.push({username, comment, id: uuidv4()});     
    
    // Redirects to the comment list 
    res.redirect('/comments')
})

app.listen(3000, () =>  {
    console.log('Listening to port 3000!');
});