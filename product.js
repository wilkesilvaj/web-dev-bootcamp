const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console.log('Oh NO!! Connection failed!!');
    })

// Creates a new Schema / Skeleton for our 'objects'
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        min: [0, 'Price must be positive!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }, 
    size:   {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({ name: 'Mountain Bike', price: 599, categories: ['Cycling', 'Sports'] });
// bike.save()
//     .then(data => {
//         console.log(`${data.name} was succesfully added to the DB!`);
//     })
//     .catch(err => {
//         console.log('Ooops! Something went wrong!');
//         console.log(err);
//     })

// const bikeHelmet = new Product({ name: 'Bike Helmet', price: 59.50, categories: ['Cycling', 'Safety', 'Sports'] });
// bikeHelmet.save()
//     .then(data => {
//         console.log(`${data.name} was succesfully added to the DB!`);
//     })
//     .catch(err => {
//         console.log('Ooops! Something went wrong!');
//         console.log(err);
//     })

// const tirePump = new Product({ name: 'Tire Pump', price: 19.50, categories: ['Cycling', 'Safety', 'Sports'] });
// tirePump.save()
//     .then(data => {
//         console.log(`${data.name} was succesfully added to the DB!`);
//     })
//     .catch(err => {
//         console.log('Ooops! Something went wrong!');
//         console.log(err);
//     })

Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 100.99})
    .then(data => {
        console.log(`${data.name} was succesfully updated to the DB!`);
        console.log(data);
    })
    .catch(err => {
        console.log('Ooops! Something went wrong!');
        console.log(err);
    })