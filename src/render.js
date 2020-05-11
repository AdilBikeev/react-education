import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './App';

let renderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

export default renderEntireTree;