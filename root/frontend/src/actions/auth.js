import * as api from '../api';

export const signin = (loginFormData, history) => async (dispatch) => {
    try {
        //login user

        //
        history.push('/dashboard');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (registrationFormData, history) => async (dispatch) => {
    try {
        //login user

        //
        history.push('/dashboard');
    } catch (error) {
        console.log(error);
    }
}