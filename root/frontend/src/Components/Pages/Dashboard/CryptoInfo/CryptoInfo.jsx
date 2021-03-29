import React, {useEffect, useState, useContext} from 'react';
import './cryptoInfoStyles.scss';
import {CryptoInfoContext} from '../../../../context/context';

const CryptoInfo = ({_id, id, name, symbol, value}) => {
    return (
        <div className={"crypto__info__box"}>
           {_id}
           {id}
           {name}
           {symbol}
           {value}
        </div>
    )
}

export default CryptoInfo;
