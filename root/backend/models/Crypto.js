let mongoose = require('mongoose');

const Schema = mongoose.Schema;

let cryptoSchema = new Schema({
    name: {
        type: String
    }
}, {
    collection: 'cryptos'
})

module.exports = mongoose.model('Crypto', cryptoSchema);