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
console.log ("******** Using 'ForEach' ********");
movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

// Iterating through the array using For Of
console.log ("******** Using 'For OF' ********");
for (let movie of movies)   {
    console.log(`${movie.title} - ${movie.score}/100`);
}

//  Example of the map function which returns an array with the movie titles UPPERCASED
movies.map(function(movie)  {
    return movie.title.toUpperCase();
});

//  First example of an arrow function which simulates the roll of a dice
const rollDie = () =>   {
    return Math.floor(Math.random() *6) +1;
}
// Second example of an arrow function, which squares a number
const square = num =>   {
    return num*num;
}