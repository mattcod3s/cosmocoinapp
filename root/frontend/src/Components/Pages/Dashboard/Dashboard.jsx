import React, {useEffect, useContext} from 'react';
import './dashboardStyles.scss';
import CryptoInfo from './CryptoInfo/CryptoInfo';
import Watchlist from './Watchlist/Watchlist';
import HeaderMain from '../../Headers/HeaderMain/HeaderMain';
import {useDispatch} from 'react-redux';
import {fetchCryptos} from '../../../actions/crypto';

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCryptos());
    }, [dispatch]);

    return (
        <div className="dashboard__page">
            <HeaderMain />
            <CryptoInfo />
            <Watchlist />
        </div>
    )
}

export default Dashboard;
