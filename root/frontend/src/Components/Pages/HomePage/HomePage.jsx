import React from 'react';
import './homePageStyles.scss';
import HomeBackground from './HomeBackground/HomeBackground';

const HomePage = () => {
    return (
        <div className="home__page">
            <HomeBackground />
            <div className="home__card">
                <div className="logo"></div>
                <div className="home__blurb">
                    <h3>Number One Platform to keep track of your favourite Cryptocurrencies!</h3>
                </div>
                <div className="home__btns">
                    <div className="home__btn btn__1">Sign In</div>
                    <div className="home__btn btn__1">Register</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
