import React from 'react';
import './cryptoStyles.scss';

const Crypto = ({id, symbol, name}) => {
    return (
        <div className="crypto__wrapper">
            <div className="crypto__symbol"><h2>{symbol}</h2></div>
            <div className="crypto__name"><h2>{name}</h2></div>
        </div>
    )
}

export default Crypto;
