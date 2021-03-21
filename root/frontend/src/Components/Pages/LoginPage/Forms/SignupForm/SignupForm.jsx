import React, {useContext, useEffect, useState} from 'react';
import './signupFormStyles.scss';
import {FadeAnimContext} from '../../../../../context/context';

const SignupForm = () => {

    const [fadeAnim, setFadeAnim] = useContext(FadeAnimContext);


    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <div className="form__container">
            <div className={`wrapper ${fadeAnim && "fade"}`} onAnimationEnd={()=>setFadeAnim(false)}>
                <div className="form__title">
                    <h2>Sign Up</h2>
                </div>
                <div className="su_form">
                    <form onSubmit={()=>handleSubmit()}>
                        <div className="form__row__top">
                            <div className="fname__input">
                                <input onChange={()=>handleChange()} type="text" placeholder="First Name"/>
                                
                            </div>
                            <div className="lname__input">
                                <input onChange={()=>handleChange()} type="text" placeholder="Last Name"/>
                                
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="email__input">
                                <input onChange={()=>handleChange()} type="email" placeholder="E-mail Address"/>
                                
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="password__input">
                                <input onChange={()=>handleChange()} type="password" placeholder="Password"/>
                                
                            </div>
                        </div>
                    </form>
                </div>
                <div className="su__buttonArea">

                </div>
            </div>
        </div>
    )
}

export default SignupForm;
