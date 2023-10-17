// create schema (breakdown of what our data should look like)... mongoose is a library 
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema(
    
{
    name: String,
    color: String, 
    readyToEat: Boolean
},
{
    timestamps: true
}
)

// create Model with that schema 
//Whatever we put as the collection name will be lowcased and pluralized +s 
//Fruit > fruits
//User > users

const Fruit = mongoose.model("Fruit",             fruitSchema) 
//                        1. ^ which collection   2. ^ the shcema

module.exports = Fruit; 