const fs = require('fs');
const folderName = process.argv[2] || 'Project';
// ES6
// import fs from 'fs';

// Async version of mrkdir method
// fs.mkdir('Dogs', {recursive: true}, (err) =>    {
//     console.log('IN THE CALLBACK!');
//     if (err) throw err;
// });

// Synchronous method
try 	{
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`);
fs.writeFileSync(`${folderName}/app.js`);
fs.writeFileSync(`${folderName}/app.css`);
}
catch(e)  {
    console.log('Something went wrong!');
    console.log(e);
}