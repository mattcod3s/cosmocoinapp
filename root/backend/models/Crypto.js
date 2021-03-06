let mongoose = require('mongoose');

const Schema = mongoose.Schema;

let cryptoSchema = new Schema({
    symbol: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    value: {
        type: String, required: true
    }, 
    id: {
        type: String, unique: true
    }, 
    percentChange1hr: {
        type: String, required: false
    },
    author: [{
        type: String, required: true
    }],
}, {
    collection: 'cryptos' 
})

module.exports = mongoose.model('Crypto', cryptoSchema); 