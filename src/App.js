import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Body/Sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import Content from './Components/Body/Content/Content';
import store from './redux/store'

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <div className='body'>
        <Sidebar />
        <Content store={store} />
      </div>
    </BrowserRouter>
  );
}

export default App;
