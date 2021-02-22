const fs = require('fs');

// ES6
// import fs from 'fs';

// Async version of mrkdir method
// fs.mkdir('Dogs', {recursive: true}, (err) =>    {
//     console.log('IN THE CALLBACK!');
//     if (err) throw err;
// });

fs.mkdirSync('Cats');