import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SignupStatusProvider, FadeAnimProvider} from './context/context';

ReactDOM.render(
    <SignupStatusProvider>
        <FadeAnimProvider>
            <App />
        </FadeAnimProvider>
    </SignupStatusProvider>    
, document.getElementById('root'));