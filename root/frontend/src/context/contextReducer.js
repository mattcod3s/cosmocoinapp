const contextReducer = (state = {authData : null}, action) => {

    switch (action.type) {
        case 'AUTH' : 
            console.log(action?.payload);
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload}));
            return { ...state, authData: action?.payload };
        case 'LOGOUT' : 

            return state;
        default : 
            return state;

    }

} 

export default contextReducer;