import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import App from './App';

const container = document.getElementById('root');
// createRoot(container!) if you use TypeScript
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
