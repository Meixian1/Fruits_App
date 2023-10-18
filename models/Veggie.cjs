// create schema (breakdown of what our data should look like)... mongoose is a library 
const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema(
    
{
    name: {
        type: String,
        require: true
    }, 
    
    color: String, 
    age: Number,
    readyToEat: Boolean,
    isHealthy: Boolean
},

{
    timestamps: true
}

)

// create Model with that schema 
//Whatever we put as the collection name will be lowcased and pluralized +s 
//Fruit > fruits
//User > users
//Viggie > veggies

const Veggie = mongoose.model("Veggie",             veggieSchema) 
//                        1. ^ which collection   2. ^ the shcema

module.exports = Veggie; 