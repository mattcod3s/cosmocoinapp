 const cryptoReducer = (cryptos = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL' : 
            return action.payload;
        case 'CREATE' : 
            return [...cryptos, action.payload];
        case 'DELETE' : 
            return cryptos.filter((crypto) => crypto._id !== action.payload);
        default : 
            return cryptos;

    }

} 

export default cryptoReducer;
