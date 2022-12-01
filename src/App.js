import React from 'react';

import './App.css';

import {Header, Body, Footer} from './containers';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
      </div>
      <div className='main__body'>
        <Body />
        </div>
    
      <div className='footer'> 
        <Footer />
      </div>
    </div>
  );
}

export default App;