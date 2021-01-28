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

console.log ("******** Using 'ForEach' ********");
movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

console.log ("******** Using 'For OF' ********");
for (let movie of movies)   {
    console.log(`${movie.title} - ${movie.score}/100`);
}