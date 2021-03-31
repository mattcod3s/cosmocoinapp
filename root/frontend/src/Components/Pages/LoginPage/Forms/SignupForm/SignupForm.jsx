import React, {useContext, useEffect, useState} from 'react';
import './signupFormStyles.scss';
import {FadeAnimContext, RegistrationFormDataContext, CurrentUserContext} from '../../../../../context/context';
import { signup } from '../../../../../actions/auth';
import { useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import visible from '../../../../../Assets/visible.svg';
import invisible from '../../../../../Assets/invisible.svg';



const SignupForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [fadeAnim, setFadeAnim] = useContext(FadeAnimContext);
    const [registrationFormData, setRegistrationFormData] = useContext(RegistrationFormDataContext);
    const [isVisible, setIsVisible] = useState(false);


    const handleSubmit = () => {
        console.log(registrationFormData);
        dispatch(signup(registrationFormData, history));
    }

    const handleChange = (e) => {
        setRegistrationFormData({ ...registrationFormData, [e.target.name] : e.target.value})
        
    }

    return (
        <div className="form__container">
            <div className={`wrapper ${fadeAnim && "fade"}`} onAnimationEnd={()=>setFadeAnim(false)}>
                <div className="form__title">
                    <h2>Sign Up</h2>
                </div>
                <div className="su_form">
                    <form>
                        <div className="form__row__top">
                            <div className="fname__input">
                                <input onChange={(e)=>handleChange(e)} type="text" placeholder="First Name" name="firstName"/>
                                
                            </div>
                            <div className="lname__input">
                                <input onChange={(e)=>handleChange(e)} type="text" placeholder="Last Name" name="lastName"/>
                                
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="email__input">
                                <input onChange={(e)=>handleChange(e)} type="email" placeholder="E-mail Address" name="emailAddress"/>
                                
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="password__input">
                                <input onChange={(e)=>handleChange(e)} type={isVisible ? "text" : "password"}placeholder="Password" name="password"/>
                                <img src={isVisible ? visible : invisible} onClick={()=>setIsVisible(!isVisible)}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="su__buttonArea">
                    <div className="su__btn" onClick={()=>handleSubmit()}>
                        <h3>Sign Up</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;
