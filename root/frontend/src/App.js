import React from 'react';
import HeaderHome from './Components/Headers/HeaderHome/HeaderHome';
import HeaderMain from './Components/Headers/HeaderMain/HeaderMain';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Pages/HomePage/HomePage';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import './AppStyles.scss';
import './reset.css';
const App = () => {
    return (
        <div className="app">
            {/*<HeaderHome />*/}
            {/*<HeaderMain />*/}
            <HomePage />
            {/*<LoginPage />*/}
            {/*<Dashboard />*/}
            {/*<Footer />*/}
        </div>
    )
}

export default App;
