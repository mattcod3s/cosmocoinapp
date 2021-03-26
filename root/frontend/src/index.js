import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SignupStatusProvider, CryptoAddDataProvider, FadeAnimProvider, UserProvider, CurrentUserProvider, RegistrationFormDataProvider, LoginFormDataProvider} from './context/context';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <CurrentUserProvider>
            <UserProvider>
                <RegistrationFormDataProvider>
                    <LoginFormDataProvider>
                        <SignupStatusProvider>
                            <FadeAnimProvider>
                                <CryptoAddDataProvider>
                                    <App />
                                </CryptoAddDataProvider>
                            </FadeAnimProvider>
                        </SignupStatusProvider>
                    </LoginFormDataProvider>
                </RegistrationFormDataProvider>
            </UserProvider>    
        </CurrentUserProvider>
    </Provider>
, document.getElementById('root'));