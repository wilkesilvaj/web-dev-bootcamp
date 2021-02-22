// Require Statements
const franc = require('franc');
const langs = require('langs');

// Stores the input text
const inputText = process.argv[2];


// Gets the language code from the argument(s) provided
let langCode = franc(inputText);

// Prints the language 3-digit code
console.log(langCode);

// Prints the language's name in English
console.log(langs.where('3', langCode).name);
// Prints the language's local / original name
console.log(langs.where('3', langCode).local);