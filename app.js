const movies = [
    {
        title: "Batman Begins",
        score: 90
    },
    {
        title: "Lego Movie",
        score: 85
    },
    {
        title: "Robin Hood",
        score: 88
    },
    {
        title: "Nanatsu No Taizai",
        score: 50
    },


];
// Iterating through the array using ForEach
console.log("******** Using 'ForEach' ********");
movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

// Iterating through the array using For Of
console.log("******** Using 'For OF' ********");
for (let movie of movies) {
    console.log(`${movie.title} - ${movie.score}/100`);
}

//  Example of the map function which returns an array with the movie titles UPPERCASED
movies.map(function (movie) {
    return movie.title.toUpperCase();
});

//  First example of an arrow function which simulates the roll of a dice
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}
// Second example of an arrow function, which squares a number
const square = num => {
    return num * num;
}

// The following arrow function does the same as the one above it. It is just "shorter"
const shortSquare = num => num * num;


console.log("******** Using Arrow Functions within the MAP method ********");
const newMovies = movies.map(movie => {
    return `${movie.title} - ${movie.score / 10}`;
});
console.log(newMovies);

// The following code is after 3 seconds
console.log("******** SetTimeOut Demo ********");
setTimeout(() =>    {
    console.log("I'm printed ONCE after 3 secs!");
},3000);

// The following code is repeated every 2 seconds
const randomNumberId = setInterval(() => {
    console.log(Math.random());
},2000);

// The following is used to clear the interval
// clearInterval(randomNumberId);

// const goodMovies = movies.filter(() => {
//     return movie.score > 80;
// })

const goodMovies = movies.filter(m => m.score > 85)
console.log(goodMovies);

const goodTitles = goodMovies.map(m => m.title);
console.log(goodTitles);

// This is an example of using 'map' on the returned array from a 'filter' method
const greatMovies = movies.filter(m=> m.score >85).map(m => m.title);
console.log(greatMovies);





