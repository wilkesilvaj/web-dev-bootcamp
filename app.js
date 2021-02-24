const express = require('express');
const app = express();

app.use((req, res) =>   {
    console.log("We got a request!");
    // res.send("Hello, we got a new request!!");
    // res.send({color: 'red'});
    res.send('<h1>This is my webpage!</h1>');
});

app.listen(8080, () =>  {
    console.log("LISTENING ON PORT 8080");
});