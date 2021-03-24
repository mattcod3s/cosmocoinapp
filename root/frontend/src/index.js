import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SignupStatusProvider, FadeAnimProvider, UserProvider, CurrentUserProvider, RegistrationFormDataProvider, LoginFormDataProvider} from './context/context';

ReactDOM.render(
    <CurrentUserProvider>
        <UserProvider>
            <RegistrationFormDataProvider>
                <LoginFormDataProvider>
                    <SignupStatusProvider>
                        <FadeAnimProvider>
                            <App />
                        </FadeAnimProvider>
                    </SignupStatusProvider>
                </LoginFormDataProvider>
            </RegistrationFormDataProvider>
        </UserProvider>    
    </CurrentUserProvider>
, document.getElementById('root'));