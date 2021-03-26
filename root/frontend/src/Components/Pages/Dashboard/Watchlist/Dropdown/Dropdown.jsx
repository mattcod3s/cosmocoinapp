import React, { useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './dropdownStyles.scss';
import Crypto from './Crypto/Crypto';
import {useSelector} from 'react-redux'


const Dropdown = () => {
    const dropdown = useSelector((state) => state.cryptoReducer);
    
    useEffect(() => {
        console.log(dropdown);
    }, [])
    return (
        <div className="dropdown__menu">
            <Crypto />
        </div>
    )
}

export default Dropdown;
