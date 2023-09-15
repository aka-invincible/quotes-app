const express = require('express'); //function'
const app = express(); // object -> instance application
const mongoose = require('mongoose'); // odm -> object data mapper
const seedDB = require('./seed');
const quoteRoutes = require('./apis/quotesRoutes')

const cors = require('cors'); // middlewares

app.use(cors({ origin: ['http://localhost:3000'] }))
app.use(express.json()); // body parsing middleware

mongoose.connect('mongodb://127.0.0.1:27017/react-quotes-app')
    .then(() => { console.log("db connected") })
    .catch((err) => { console.log(err) }) // return promise

app.get('/hello', (req, res) => {
    res.status(200).json({ msg: "Hello from quotes app" })
})

// seedDB();
app.use(quoteRoutes);

app.listen(8000, () => {
    console.log("Server connected to port 8000")
})