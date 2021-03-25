import * as api from '../api';

export const fetchCryptos = () => async (dispatch) => {

    try {
        const { data } = await api.fetchCryptos();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const addCryptos = (crypto) => async (dispatch) => {

    try {
        const { data } = await api.addCryptos(crypto);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}