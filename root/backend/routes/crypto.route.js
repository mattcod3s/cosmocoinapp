const express = require('express');

const cryptoRoute = express.Router();

const { getCryptos, addCryptos, updateCryptos, deleteCryptos } = require('../controllers/crypto.js');


//fetch cryptos from database into watchlist
cryptoRoute.get('/', getCryptos);

//post new cryptocurrency to database when user adds it
cryptoRoute.post('/', addCryptos);

//update price of cryptocurrency
cryptoRoute.patch('/:id', updateCryptos);

//delete crypto off database, therefore off watchlist
cryptoRoute.delete('/:id', deleteCryptos);


module.exports = cryptoRoute;