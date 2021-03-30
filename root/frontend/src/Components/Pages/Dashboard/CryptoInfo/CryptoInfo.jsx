import React, {useEffect, useState, useContext} from 'react';
import './cryptoInfoStyles.scss';
import {CryptoInfoContext} from '../../../../context/context';
import useChartData from '../../../../useChartData';

const CryptoInfo = ({_id, id, name, symbol, value, percentChange1hr, percentChange24hr, percentChange7d, marketCap}) => {
    const [cryptoInfo, setCryptoInfo] = useContext(CryptoInfoContext);
    useEffect(()=> {
        const btcData = async () => {
            const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=${symbol}&tsym=USD&limit=119&api_key=${process.env.REACT_APP_CRYPTOCOMPARE_API_KEY}`);
            const json = await response.json();
            const data = json.Data.Data
            const times = data.map(obj => obj.time)
            const prices = data.map(obj => obj.high)
            return {
              times,
              prices
            }
          }
          console.log(btcData())
    }, []);
    return (
        <div className={"crypto__info__box"}>
            <div className="exit" onClick={()=>setCryptoInfo(false)}>
                <h1>X</h1>
            </div>
            <div className="info__main">
                <div className="info__main__top">
                    <div className="symbol"><h2>{symbol}</h2></div>
                    <div className="name"><h2>{name}</h2></div>
                    <div className="value"><h2>{`$ ${value}`}</h2></div>
                </div>
                <div className="info__main__row">
                    <div className="marketCap"><h2>{`${marketCap}`}</h2></div>
                    <div className="change1h"><h2>{`%${percentChange1hr}`}</h2></div>
                    <div className="change24h"><h2>{`%${percentChange24hr}`}</h2></div>
                    <div className="change7d"><h2>{`%${percentChange7d}`}</h2></div>
                </div>
            </div>
        </div>
    )
}

export default CryptoInfo;
