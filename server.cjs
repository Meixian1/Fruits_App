/* eslint-disable no-undef */
const express = require('express') 
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Fruit = require('./models/Fruit.cjs')
const Veggie = require('./models/Veggie.cjs')

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


app.use(morgan('dev'))  //app.use is used to help set up the middleware

app.use(express.static(path.join(__dirname, 'dist'))); //double underscores

app.use(middleware);

app.use(express.json()); // adds .body to the request

// "/"
// serve the html and js of our react app (dist folder)
// const fruits = []; 

// app.get('/fruits', async (req, res)=>{
//     let fruitsFromDB = await Fruit.find()
//     res.send(fruitsFromDB);
// })

app.get('/fruits', (req, res) => {
    Fruit.find().then((fruitsFromDB) =>{
        res.send(fruitsFromDB);
    })
});

app.get('/veggies', async (req, res) => {
    console.log("hidden route")
    let veggiesFromDB = await Veggie.find()

    res.send(veggiesFromDB)
})

app.get("/", (req, res) => {
    res.send("here is your valuable data")
    
})

app.post('/fruits', async (req, res) => {
    try {
        console.log(req.body);
        let fruit = req.body;
        console.log(fruit)
        let responseFromDB = await Fruit.create(fruit);
        console.log(responseFromDB);
        res.send("Route is good!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error while creating the fruit.");
    }
});

app.post("/veggies", async(req, res)=>{
    //make Veggie model 
   let dbResponse = await Veggie.create(req.body);
   // the created object
   res.status(201).send(dbResponse)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});