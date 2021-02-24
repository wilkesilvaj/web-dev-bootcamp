const express = require('express');
const app = express();

// app.use((req, res) =>   {
//     console.log("We got a request!");
//     // res.send("Hello, we got a new request!!");
//     // res.send({color: 'red'});
//     res.send('<h1>This is my webpage!</h1>');
// });

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
});


// Path routing examples
app.get('/r/:subreddit', (req, res) => {
    // The ':subreddit' information is stored within the 'req' object's 'params'
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);

});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} of the ${subreddit} subreddit</h1>`);

});

// The following methods send responses if the server receives GET requests
app.get('/cats', (req, res) => {
    res.send('GET response to Cat request! MEOW!')
});
app.get('/dogs', (req, res) => {
    res.send('GET response to request! WOOF!')
});
app.get('/', (req, res) => {
    res.send('GET response to Home page!!')
});

//  The following method sends responses if the server receives POST requests
app.post('/cats', (req, res) => {
    res.send('POST response to Cat request! MEOW!')
});
app.post('/dogs', (req, res) => {
    res.send('POST response to DOG request! WOOF!')
});
app.post('/', (req, res) => {
    res.send('POST response to Home page!!')
});

// The following methods makes usage of queries in the request

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('<h2>Nothing to be found if nothing was searched for!</h2>')
    }
    else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }    
});