import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from './redux/store'


export let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} addPost={addPost} />
        </BrowserRouter>, document.getElementById('root'));
}