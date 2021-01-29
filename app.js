// Starter basic arrays and objects

const person = {
    firstName: "John",
    age: 27,
    gender: "male",
    nationality: "brazilian",
    hometown: "BH",
    hobbies: "guitar and games"
}

const scores = [99984,85467,76521,62487];


// The 'destructure' syntax allows us to capture specific values from the array 'scores' and store the values in the variables / objects / arrays we specify
const [highScore, secondHighScore, ...otherScores] = scores;

// When used on OBJECTS, we must match the name of the property in order to create a variable with its value. THE NEW VARIABLE WILL MATCH THE PROPERTY's IDENTIFIER
// UNLESS YOU SPECIFY SOMETHING ELSE
const user = {firstName, nationality, age} = person;

const user2 = {firstName: fName, nationality, age: yearsOfLife} = person;