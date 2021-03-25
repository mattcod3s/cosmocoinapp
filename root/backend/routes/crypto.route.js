const express = require('express');

const cryptoRoute = express.Router();

const { getCryptos, addCryptos, deleteCryptos } = require('../controllers/crypto.js');


//fetch cryptos from database into watchlist
cryptoRoute.get('/', getCryptos);

//post new cryptocurrency to database when user adds it
cryptoRoute.post('/add:id', addCryptos);

//delete crypto off database, therefore off watchlist
cryptoRoute.delete('/delete:id', deleteCryptos);


module.exports = cryptoRoute;