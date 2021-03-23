import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SignupStatusProvider, FadeAnimProvider, UserProvider} from './context/context';

ReactDOM.render(
    <UserProvider>
        <SignupStatusProvider>
            <FadeAnimProvider>
                <App />
            </FadeAnimProvider>
        </SignupStatusProvider>
    </UserProvider>    
, document.getElementById('root'));