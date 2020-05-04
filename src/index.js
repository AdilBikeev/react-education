import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} addPost={store.addPost.bind(store)} textChange={store.textChange.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store)

store.subscribe(rerenderEntireTree)

serviceWorker.unregister();