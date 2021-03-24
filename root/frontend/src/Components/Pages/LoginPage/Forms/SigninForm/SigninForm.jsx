import React, {useContext, useEffect, useState, useReducer, useDispatch} from 'react';
import './signinFormStyles.scss';
import {FadeAnimContext,UserContext, CurrentUserContext, LoginFormDataContext} from '../../../../../context/context';
import {useHistory, useLocation} from 'react-router-dom';
import google from '../../../../../Assets/google.svg';
import {GoogleLogin } from 'react-google-login';
import dotenv from  'dotenv'
import { signin } from '../../../../../actions/auth';

const SigninForm = () => {
    const history = useHistory();
    const location = useLocation();
    const {authorise, logout} = useContext(UserContext);
    const [fadeAnim, setFadeAnim] = useContext(FadeAnimContext);
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
    const [loginFormData, setLoginFormData] = useContext(LoginFormDataContext);

    useEffect(() => {
        const token = currentUser?.token;
        setCurrentUser(JSON.parse(localStorage.getItem('profile')));
        console.log(currentUser)
    }, [location, currentUser])

    const handleSubmit = () => {
        console.log(loginFormData);
    }

    const handleChange = (e) => {
        setLoginFormData({ ...loginFormData, [e.target.name] : e.target.value});
        signin(loginFormData, history);
    }

    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            authorise(result, token);
            history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
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
                        <input type="text" name="emailAddress" placeholder="Email Address" onChange={(e)=>handleChange(e)}/>
                        <input type="password" name="password" placeholder="Password" onChange={(e)=>handleChange(e)}/>
                    </form>
                </div>
                <div className="si__buttonArea">
                    <div className="sign_in__button si_btn" onClick={()=>handleSubmit()}><h3>Sign In</h3></div>
                    {/*<div className="sign_in__google__button si_btn"><h3>Sign In with Google</h3><img src={google}/></div>*/}
                    <GoogleLogin 
                        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
                        render={(renderProps) => (
                            <div 
                                className="sign_in__google__button si_btn" 
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
