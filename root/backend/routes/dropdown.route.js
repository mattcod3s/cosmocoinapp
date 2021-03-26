const express = require('express');

const dropdownRoute = express.Router();

const { getDropdown } = require('../controllers/dropdown.js');


//fetch cryptos from database into watchlist
dropdownRoute.get('/', getDropdown);




module.exports =  dropdownRoute;