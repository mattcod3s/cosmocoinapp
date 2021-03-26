require('dotenv').config;
 const getDropdown = async (req, res) => {
     let dropResponse;
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
        dropResponse = response;
        res.status(200).json(dropResponse);
        /*console.log('API call response:', response);*/
        }).catch((err) => { 
        console.log('API call error:', err.message);
        });
        
        
}

module.exports = {
    getDropdown
}