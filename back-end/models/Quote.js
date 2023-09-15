const mongoose = require('mongoose');

let quoteSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const Quotes = mongoose.model('Quotes', quoteSchema);

module.exports = Quotes;