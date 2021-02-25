const express = require('express');
const { ppid } = require('process');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) =>  {
    app.send('Hi!');
})

app.listen(3000, () =>  {
    console.log('Listening on port 3000');
});