const express = require('express');
const cryptoRoute = express.Router();

let CryptoModel = require('../models/Crypto');


cryptoRoute.route('/').get((req, res) => {
    CryptoModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
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