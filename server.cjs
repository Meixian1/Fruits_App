/* eslint-disable no-undef */
const express = require('express') 
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Fruit = require('./models/Fruit.cjs')

// allows us to use process.env (get variables from .env file)
require('dotenv').config();


require('./config/db.cjs')


app.use(cors({
    origin: "*"
}))


const middleware = (req, res, next) => {
    console.log("doing stuff");
    next();
}


app.use(morgan('dev'))


app.use(middleware);

app.use(express.json()); // adds .body to the request

// "/"
// serve the html and js of our react app (dist folder)
const fruits = []; 

app.get('/fruits', (req, res)=>{
    res.send(fruits)
})

app.post('/fruits', (req, res)=>{
    fruits.push(req.body)    
    console.log(req.body);
    Fruit.create(fruit)
    res.send("Route is good!")
})

app.get("/", (req, res) => {
    res.send("here is your valuable data")
    
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});