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
    }
}, {
    collection: 'cryptos' 
})

module.exports = mongoose.model('Crypto', cryptoSchema); 