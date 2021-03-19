import React from 'react';
import './dashboardStyles.scss';
import CryptoInfo from './CryptoInfo/CryptoInfo';
import Watchlist from './Watchlist/Watchlist';
const Dashboard = () => {
    return (
        <div>
            <CryptoInfo />
            <Watchlist />
        </div>
    )
}

export default Dashboard;
