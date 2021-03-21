import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SignupStatusProvider} from './context/context';

ReactDOM.render(
    <SignupStatusProvider>
        <App />
    </SignupStatusProvider>    
, document.getElementById('root'));