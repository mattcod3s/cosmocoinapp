import { combineReducers } from 'redux';
import cryptoReducer from './cryptoReducer';
import dropdownReducer from './dropdownReducer';
export default combineReducers({ cryptoReducer, dropdownReducer})