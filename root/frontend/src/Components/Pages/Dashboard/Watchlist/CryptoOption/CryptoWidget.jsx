import React, { useEffect, useState, useContext, useRef } from 'react';
import './cryptoWidgetStyles.scss';
import deleteIcon from '../../../../../Assets/deleteOff.svg';
import infoIcon from '../../../../../Assets/infoIcon.svg';
import refreshIcon from '../../../../../Assets/refresh.svg';
import { useDispatch, useSelector } from 'react-redux';
import {CryptoInfoContext} from '../../../../../context/context';
import { deleteCryptos, updateCryptos } from '../../../../../actions/crypto';


const CryptoWidget = ({_id, id, name, symbol, value, isAdd}) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [cryptoInfo, setCryptoInfo] = useContext(CryptoInfoContext);
    const cryptos = useSelector((state) => state.cryptoReducer);
    const dropdown = useSelector((state) => state.dropdownReducer);
    const [updatedCrypto, setUpdatedCrypto] = useState({
        _id: '' ,id: '', name: '', symbol: '', value: '',
    });

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
          } else {
            if (updatedCrypto.id !== '') {
                handleInfoClick();
                dispatch(updateCryptos(_id, updatedCrypto));
            }
          }
    }, [updatedCrypto, cryptos])

    const handleInfoClick = () => {
        /*setCryptoInfo(true);*/
        const { data } = dropdown;
        data.map((d) => {
            if (d.name === name) {
                let newPrice = String(Math.round(d.quote.USD.price * 100) / 100);
                if (newPrice !== value) {
                    //console.log("update me")
                    setUpdatedCrypto({
                        _id: _id, id: id, name: name, symbol: symbol, value: newPrice, 
                    })
                }
                //console.log(newPrice, value)
            }
        })
        //console.log(cryptos, data);
        //console.log(updatedCrypto);
    }

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
                    <img src={infoIcon} onClick={()=>handleInfoClick()}/>
                    <img src={deleteIcon} onClick={()=>dispatch(deleteCryptos(_id))}/>
                </div>
            </div>
        </div>
    )
}

export default CryptoWidget;
