 const cryptoReducer = (cryptos = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL' : 
            return action.payload;
        case 'CREATE' : 
            return [...cryptos, action.payload];
        default : 
            return cryptos;

    }

} 

export default cryptoReducer;
