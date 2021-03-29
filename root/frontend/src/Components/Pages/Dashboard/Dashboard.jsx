import React, {useEffect, useContext} from 'react';
import './dashboardStyles.scss';
import CryptoInfo from './CryptoInfo/CryptoInfo';
import Watchlist from './Watchlist/Watchlist';
import HeaderMain from '../../Headers/HeaderMain/HeaderMain';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCryptos} from '../../../actions/crypto';
import { CryptoInfoContext, InfoContentContext } from '../../../context/context'


const Dashboard = () => {
    const [cryptoInfo, setCryptoInfo] = useContext(CryptoInfoContext);
    const dispatch = useDispatch();
    const cryptos = useSelector((state) => state.cryptoReducer);
    const [infoContent, setInfoContent] = useContext(InfoContentContext);
    useEffect(() => {
        dispatch(fetchCryptos());
    }, [dispatch, cryptos]);

    return (
        <div className="dashboard__page">
            <HeaderMain />
           {cryptoInfo ?  <CryptoInfo _id={infoContent._id} id={infoContent.id} name={infoContent.name} symbol={infoContent.symbol} value={infoContent.value} /> : <Watchlist />}
        </div>
    )
}

export default Dashboard;
