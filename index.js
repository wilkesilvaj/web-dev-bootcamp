const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response!');
});

app.listen(3000, () =>  {
    console.log('Listening to port 3000!');
});