const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology: true})
.then( () =>    {
    console.log('Connection Open!');
})
.catch(err =>   {
    console.log('Oh NO!! Connection failed!!');
})


const movieSchema = new mongoose.Schema ({
    title: String,
    year: Number,
    score: Number,
    rating: String
})