let mongoose = require('mongoose');

const Schema = mongoose.Schema;

let cryptoSchema = new Schema({
    symbol: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    price: {
        type: String, requuired: true
    }, 
    id: {
        type: String
    }
}, {
    collection: 'cryptos' 
})

module.exports = mongoose.model('Crypto', cryptoSchema); 