import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Body/Sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import Content from './Components/Body/Content/Content';

function App(props) {
  return (
    <BrowserRouter className="App">
      <Header />
      <div className='body'>
        <Sidebar />
        <Content store={props.store} addPost={props.addPost} />
      </div>
    </BrowserRouter>
  );
}

export default App;
