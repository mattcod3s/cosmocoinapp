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
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/api', cryptoEndPoint);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port: ' + port);
})


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
  console.log('API call response:', response.data[1].name);
}).catch((err) => {
  console.log('API call error:', err.message);
});