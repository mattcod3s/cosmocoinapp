import React, { useState, createContext, useReducer } from 'react';
import contextReducer from './contextReducer';

const initialLoginFormData = {emailAddress: '', password: ''};
const initialRegistrationFormData = {firstName: '', lastName: '', emailAddress: '', password: ''};



export const SignupStatusContext = createContext();

export const SignupStatusProvider = (props) => {

    const [isSignup, setIsSignup] = useState(true);

    return (
        <SignupStatusContext.Provider value={ [isSignup, setIsSignup] }>
            {props.children}
        </SignupStatusContext.Provider>
    );
}


export const FadeAnimContext = createContext();

export const FadeAnimProvider = (props) => {

    const [fadeAnim, setFadeAnim] = useState(false);

    return (
        <FadeAnimContext.Provider value={ [fadeAnim, setFadeAnim] }>
            {props.children}
        </FadeAnimContext.Provider>
    );
}


export const UserContext = createContext(contextReducer);


export const UserProvider = (props) => {
    const [user, dispatch] = useReducer(contextReducer);

    const authorise = (result, token) => {
        dispatch({ type : 'AUTH', payload : result, token});
    }

    const logout = (result) => {
        dispatch({ type : 'LOGOUT', payload : result });
    }

    return (
        <UserContext.Provider value={{ 
            authorise, 
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export const CurrentUserContext = createContext();


export const CurrentUserProvider = (props) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
        <CurrentUserContext.Provider value={ [currentUser, setCurrentUser] }>
            {props.children}
        </CurrentUserContext.Provider>
    )
}


export const LoginFormDataContext = createContext();


export const LoginFormDataProvider = (props) => {

    const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

    return (
        <LoginFormDataContext.Provider value={ [loginFormData, setLoginFormData] }>
            {props.children}
        </LoginFormDataContext.Provider>
    )
}

export const RegistrationFormDataContext = createContext();


export const RegistrationFormDataProvider = (props) => {

    const [registrationFormData, setRegistrationFormData] = useState(initialRegistrationFormData);

    return (
        <RegistrationFormDataContext.Provider value={ [registrationFormData, setRegistrationFormData] }>
            {props.children}
        </RegistrationFormDataContext.Provider>
    )
}