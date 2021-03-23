import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SignupStatusProvider, FadeAnimProvider, UserProvider, CurrentUserProvider} from './context/context';

ReactDOM.render(
    <CurrentUserProvider>
        <UserProvider>
            <SignupStatusProvider>
                <FadeAnimProvider>
                    <App />
                </FadeAnimProvider>
            </SignupStatusProvider>
        </UserProvider>    
    </CurrentUserProvider>
, document.getElementById('root'));