const mongoose = require('mongoose'); // odm -> object data mapper
const Quotes = require('./models/Quote');

let dummyQuotes = [{
        author: "Samarth Vohra",
        text: "billo bagey billiyan da ki karegi"
    },
    {
        author: "Abhishek Suryavanshi",
        text: "bagey bagey billiyan da ki karegi"
    },
    {
        author: "Shahid Raza",
        text: "Mai to toot gaya bhaisaab"
    },
    {
        author: "Chandan Sahu",
        text: "Haan bhai"
    },
]

async function seedDB() {
    await Quotes.insertMany(dummyQuotes);
    console.log("db Seeded")
}

module.exports = seedDB