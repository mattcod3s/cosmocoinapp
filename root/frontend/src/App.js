import React from 'react';
import HeaderHome from './Components/Headers/HeaderHome/HeaderHome';
import HeaderMain from './Components/Headers/HeaderMain/HeaderMain';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Pages/HomePage/HomePage';
import Dashboard from './Components/Pages/Dashboard/Dashboard';

const App = () => {
    return (
        <div>
            <HeaderHome />
            <HeaderMain />
            <HomePage />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default App;
