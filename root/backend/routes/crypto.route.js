const express = require('express');
const cryptoRoute = express.Router();

let CryptoModel = require('../models/Crypto');


cryptoRoute.route('/').get((req, res) => {
    /*CryptoModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })*/
    const rp = require('request-promise');
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
          'start': '1',
          'limit': '10',
          'convert': 'USD'
        },
        headers: {
          'X-CMC_PRO_API_KEY': `${process.env.CMC_API_KEY}`
        },
        json: true,
        gzip: true
      };
      
      rp(requestOptions).then(response => {
        console.log('API call response:', response.data[0].name);
      }).catch((err) => {
        console.log('API call error:', err.message);
      });
})

cryptoRoute.route('/add-crypto').post((req, res, next) => {
    CryptoModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

cryptoRoute.route('/delete-crypto/:id').delete((req, res, next) => {
    CryptoModel.findByIdAndRemove(req.params.id, (error, data => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    }))
})


module.exports = cryptoRoute;