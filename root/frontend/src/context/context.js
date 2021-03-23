import React, { useState, createContext, useReducer } from 'react';
import contextReducer from './contextReducer';

const initialUsers = [
    {
        username: 'JohnDoe1992',
        password: '1234567max!',
    }
]

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
    const [user, dispatch] = useReducer(contextReducer, initialUsers);

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