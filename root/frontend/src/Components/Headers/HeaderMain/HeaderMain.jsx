import React, {useContext,} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {UserContext, CurrentUserContext} from '../../../context/context';
import './headerMainStyles.scss';
import userIcon from '../../../Assets/userIcon.svg';

const HeaderMain = () => {
    const history = useHistory();
    const location = useLocation();
    const {authorise, logout,} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

    const logoutHandler = () => {
        logout();
        history.push('/');
        setCurrentUser(null);
        
    }

    return (
        <div className="dashboard__header">
            <div className="logo__area">
                <div className="logo"></div>
            </div>
            <div className="profile__area">
                <div className="profile__details">
                    <div className="profile__img">
                        <img src={userIcon}/>
                    </div>
                    <div className="profile__name">
                        <h3>{JSON.parse(localStorage.getItem('profile')).name}</h3>
                    </div>
                </div>
                <div className="logout__buttonArea">
                    <div className="logout__btn" onClick={()=>logoutHandler()}>
                        <h4>Log Out</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain;
