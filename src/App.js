import React from 'react';

import './App.css';

import {Header, Leftmostbar, Body} from './containers';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
      </div>
      {/* <div className='leftmostbar'>
        <Leftmostbar />
      </div> */}
      <div className='main__body'>
        <Body />
        </div>
    </div>

  );
}

export default App;