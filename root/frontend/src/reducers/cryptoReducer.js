 const cryptoReducer = (cryptos = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL' : 
            return action.payload;
        case 'CREATE' : 
            return cryptos;
        default : 
            return cryptos;

    }

} 

export default cryptoReducer;
