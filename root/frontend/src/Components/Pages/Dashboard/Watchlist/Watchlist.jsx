import React, {useEffect} from 'react';
import './watchlistStyles.scss';
import addButton from '../../../../Assets/button.svg';
import Crypto from './Crypto/Crypto';
import {useSelector} from 'react-redux';

const Watchlist = () => {
    const cryptos = useSelector((state) => state.cryptoReducer);

    useEffect(() => {
        console.log(cryptos);
    }, [])

    return (
        <div className="watchlist__container">
            <div className="watchlist__header">
                <div className="header__title">
                    <h3>Your Watchlist</h3>
                </div>
                <div className="header__add">
                    <div className="add__area">
                        <div className="add_icon">
                            <img src={addButton}/>
                        </div>
                        <div className="add_text">
                            <h4>Add CryptoCurrency</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="watchlist__main">
                <Crypto />
            </div>
        </div>
    )
}

export default Watchlist;
