import React, { useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import './dropdownStyles.scss';
import Crypto from './Crypto/Crypto';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';


const Dropdown = ({isActive}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const dropdown = useSelector((state) => state.dropdownReducer);
    const [displayData, setDisplayData] = useState();
    const { data } = dropdown;
    useEffect(() => {
        console.log(dropdown);
        console.log(data)
        setDisplayData(data);
    }, [dispatch, dropdown, location])
    
    const sumData = (
        <div className="dropdown__menu">
            {displayData === undefined ? <h2>hello</h2> : 
            <>
            <Crypto name={displayData[0].name} symbol={displayData[0].symbol} id={displayData[0].id}/>
            <Crypto name={displayData[1].name} symbol={displayData[1].symbol} id={displayData[1].id}/>
            <Crypto name={displayData[2].name} symbol={displayData[2].symbol} id={displayData[2].id}/>
            <Crypto name={displayData[3].name} symbol={displayData[3].symbol} id={displayData[3].id}/>
            <Crypto name={displayData[4].name} symbol={displayData[4].symbol} id={displayData[5].id}/>
            <Crypto name={displayData[6].name} symbol={displayData[6].symbol} id={displayData[6].id}/>
            <Crypto name={displayData[7].name} symbol={displayData[7].symbol} id={displayData[7].id}/>
            <Crypto name={displayData[8].name} symbol={displayData[8].symbol} id={displayData[8].id}/>
            <Crypto name={displayData[9].name} symbol={displayData[9].symbol} id={displayData[9].id}/>
            </>}
        </div>
    )

    const otherData = (
        <div className="dropdown__menu">
            <h2>hi</h2>
        </div>
    )

   
    return (
        <>
        {isActive ? sumData : otherData}
        </>
    )
}

export default Dropdown;
