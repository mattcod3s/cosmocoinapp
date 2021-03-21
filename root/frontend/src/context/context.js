import React, { useState, createContext, useReducer } from 'react';

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