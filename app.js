const express = require('express');
const app = express();

app.use((req, res) =>   {
    console.log("We got a request!");
    console.dir(req);
});

app.listen(8080, () =>  {
    console.log("LISTENING ON PORT 8080");
});