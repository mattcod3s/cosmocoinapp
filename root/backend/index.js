let express = require('express');
let cors  = require('cors');
let mongoose = require('mongoose');
let database = require('./database');
let bodyParser = require('body-parser');
const rp = require('request-promise');

require('dotenv').config;

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected');
 }, 
 error => {
     console.log('Database Couldnt be connected to: ' + error);
 }
)

const cryptoEndPoint = require('./routes/crypto.route');
const userEndPoint = require('./routes/user.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/', cryptoEndPoint);
app.use('/', userEndPoint);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port: ' + port);
})


