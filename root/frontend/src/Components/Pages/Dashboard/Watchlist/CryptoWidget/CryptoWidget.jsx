import React, { useEffect, useState, useContext } from 'react';
import './cryptoWidgetStyles.scss';
import deleteIcon from '../../../../../Assets/deleteOff.svg';
import infoIcon from '../../../../../Assets/infoIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import {CryptoInfoContext} from '../../../../../context/context';
import { deleteCryptos } from '../../../../../actions/crypto';


const CryptoWidget = ({_id, id, name, symbol, value, isAdd}) => {

    const dispatch = useDispatch();
    const [cryptoInfo, setCryptoInfo] = useContext(CryptoInfoContext);
    return (
        <div className="crypto__widget">
            <div className="crypto__symbol">
                <h1>{symbol}</h1>
            </div>
            <div className="crypto__name">
                <h2>{name}</h2>
            </div>
            <div className="crypto__value">
                <h2>{`$ ${value}`}</h2>
            </div>
            <div className="crypto__delete">
                <div className="delete__button">
                    <img src={infoIcon} onClick={()=>setCryptoInfo(true)}/>
                    <img src={deleteIcon} onClick={()=>dispatch(deleteCryptos(_id))}/>
                </div>
            </div>
        </div>
    )
}

export default CryptoWidget;
