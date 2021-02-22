// Require Statements
const franc = require('franc');
const langs = require('langs');

// Stores the input text
const inputText = process.argv[2];


// Gets the language code from the argument(s) provided
let langCode = franc(inputText);
console.log(langCode);

