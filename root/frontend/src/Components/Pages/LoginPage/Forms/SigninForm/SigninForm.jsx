import React, {useContext, useEffect, useState} from 'react';
import './signinFormStyles.scss';
import {FadeAnimContext} from '../../../../../context/context';

const SigninForm = () => {

    const [fadeAnim, setFadeAnim] = useContext(FadeAnimContext);

    const handleSubmit = () => {

    }

    const handleChange = () => {

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

            </div>
            </div>
        </div>
    )
}

export default SigninForm;
