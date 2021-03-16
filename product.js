const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then( () =>    {
    console.log('Connection Open!');
})
.catch(err =>   {
    console.log('Oh NO!! Connection failed!!');
})

// Creates a new Schema / Skeleton for our 'objects'
const productSchema = new mongoose.Schema({
    name:   {
        type: String,
        required: true
    },
    price:  {
        type: Number        
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Mountain Bike', price: 599});
bike.save()
    .then(data =>   {
        console.log(`${data.name} was succesfully added to the DB!`);
    })
    .catch(err =>   {
        console.log('Ooops! Something went wrong!');
        console.log(err);
    })