import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import { Provider } from 'react-redux';

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree();

store.subscribe(renderEntireTree)

serviceWorker.unregister();