import React from 'react';
import './cryptoWidgetStyles.scss';
import deleteIcon from '../../../../../Assets/deleteOff.svg';
import infoIcon from '../../../../../Assets/infoIcon.svg';
import { useDispatch } from 'react-redux';
import { deleteCryptos } from '../../../../../actions/crypto';

const CryptoWidget = ({_id, id, name, symbol, value}) => {
    const dispatch = useDispatch();

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
                    <img src={infoIcon} onClick={''}/>
                    <img src={deleteIcon} onClick={()=>dispatch(deleteCryptos(_id))}/>
                </div>
            </div>
        </div>
    )
}

export default CryptoWidget;
