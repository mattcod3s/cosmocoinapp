import React, {useContext, useEffect, useState, useReducer, useDispatch} from 'react';
import './signinFormStyles.scss';
import {FadeAnimContext,UserContext} from '../../../../../context/context';
import google from '../../../../../Assets/google.svg';
import {GoogleLogin } from 'react-google-login';
import dotenv from  'dotenv'

const SigninForm = () => {
    const {authorise, logout} = useContext(UserContext);
    const [fadeAnim, setFadeAnim] = useContext(FadeAnimContext);
    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;
        authorise(result, token);
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log('Failure to Authenticate using Google. Try Again Later.')
    }
    return (
        <div className="form__container">
            <div className={`wrapper ${fadeAnim && "fade"}`} onAnimationEnd={()=>setFadeAnim(false)}>
                <div className="form__title">
                    <h2>Sign In</h2>
                </div>
                <div className="si_form">
                    <form onSubmit={()=>handleSubmit()}>
                        <input type="text" placeholder="Username / Email" onChange={()=>handleChange()}/>
                        <input type="password" placeholder="Password" onChange={()=>handleChange()}/>
                    </form>
                </div>
                <div className="si__buttonArea">
                    <div className="sign_in__button si_btn"><h3>Sign In</h3></div>
                    {/*<div className="sign_in__google__button si_btn"><h3>Sign In with Google</h3><img src={google}/></div>*/}
                    <GoogleLogin 
                        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
                        render={(renderProps) => (
                            <div 
                                className="sign_in__google__button" 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}
                                >
                                    <h3>Sign In with Google</h3>
                                    <img src={google}/>
                            </div>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                </div>
            </div>
        </div>
    )
}

export default SigninForm;
