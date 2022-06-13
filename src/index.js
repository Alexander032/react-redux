import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "./redux/configureStore";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {persist} from "./redux/configureStore";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </PersistGate>
        </Provider>
    </BrowserRouter>
);

