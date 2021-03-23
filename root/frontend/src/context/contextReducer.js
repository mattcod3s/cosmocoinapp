const contextReducer = (state, action) => {
    let user;

    switch (action.type) {
        case 'AUTH' : 
            console.log(action?.payload);
            return state;
        case 'LOGOUT' : 

            return state;
        default : 
            return state;

    }

} 

export default contextReducer;