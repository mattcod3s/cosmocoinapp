import React,{useState, useEffect, useContext} from 'react';
import './loginPageStyles.scss';
import SigninCard from './Cards/SigninCard/SigninCard';
import SignupCard from './Cards/SignupCard/SignupCard';
import SigninForm from './Forms/SigninForm/SigninForm';
import SignupForm from './Forms/SignupForm/SignupForm';
import {SignupStatusContext} from '../../../context/context';

const LoginPage = () => {
    const [isSignup, setIsSignup] = useContext(SignupStatusContext);
    return (
        <div className="login__page">
            <div className="logo"></div>
            <div className="login__container">
                <div className="login__card" style={isSignup ? {transform: 'translateX(0px)'} : {transform: 'translateX(46vw)'}}>
                    {isSignup ?  <SigninCard /> : <SignupCard/>}
                </div>
                <div className="login__form" style={isSignup ? {transform: 'translateX(24vw)'} : {transform: 'translateX(0px)'}}>
                    {isSignup ? <SignupForm /> : <SigninForm /> }
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
