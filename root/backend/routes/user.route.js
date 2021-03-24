const express = require('express');
const userRoute = express.Router();

const {signin, signup} = require('../controllers/user');

let UserModel = require('../models/Users');

userRoute.post('/signin', signin);
userRoute.post('/signup', signup);



module.exports = userRoute;