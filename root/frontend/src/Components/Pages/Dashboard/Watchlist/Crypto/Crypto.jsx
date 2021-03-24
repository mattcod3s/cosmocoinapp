import React from 'react';
import './cryptoStyles.scss';

const Crypto = () => {
    return (
        <div className="crypto__wrapper">
            <div className="crypto__icon"></div>
            <div className="crypto__symbol"></div>
            <div className="crypto__name"></div>
            <div className="crypto__value"></div>
        </div>
    )
}

export default Crypto;
