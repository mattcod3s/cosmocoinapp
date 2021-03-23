import React from 'react';
import './dashboardStyles.scss';
import CryptoInfo from './CryptoInfo/CryptoInfo';
import Watchlist from './Watchlist/Watchlist';
import HeaderMain from '../../Headers/HeaderMain/HeaderMain';
const Dashboard = () => {
    return (
        <div className="dashboard__page">
            <HeaderMain name={'Matt'}/>
            <CryptoInfo />
            <Watchlist />
        </div>
    )
}

export default Dashboard;
