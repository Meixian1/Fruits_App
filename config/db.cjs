//connect mongoose to the db 
//later when we use mongoose somewhere else, it will already be connected 

const mongoose = require('mongoose');

let connectionString = 'mongodb+srv://Meixian:${password.env.MONGO_PASS}@cluster0.jnbd4mp.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect()


