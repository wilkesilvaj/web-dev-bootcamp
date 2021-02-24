const express = require('express');
const app = express();

// app.use((req, res) =>   {
//     console.log("We got a request!");
//     // res.send("Hello, we got a new request!!");
//     // res.send({color: 'red'});
//     res.send('<h1>This is my webpage!</h1>');
// });

app.listen(8080, () =>  {
    console.log("LISTENING ON PORT 8080");
});


// The following methods send responses if the server receives GET requests
app.get('/cats', (req, res) =>  {
    res.send('GET response to Cat request! MEOW!')
});
app.get('/dogs', (req, res) =>  {
    res.send('GET response to request! WOOF!')
});
app.get('/', (req, res) =>  {
    res.send('GET response to Home page!!')
});

//  The following method sends responses if the server receives POST requests
app.post('/cats', (req, res) =>  {
    res.send('POST response to Cat request! MEOW!')
});
app.post('/dogs', (req, res) =>  {
    res.send('POST response to DOG request! WOOF!')
});
app.post('/', (req, res) =>  {
    res.send('POST response to Home page!!')
});