import React from 'react';
import {useState} from 'react';

import './App.css';

import {Header, Body, Footer} from './containers';
const App = () => {
  const [chartData, setChartData] = useState('');  

  return (
    <div className="App">
      <div className="gradient__bg">
        <Header setChartData={setChartData} />
      </div>
      <div className='main__body'>
        <Body chartData={chartData} />
        <Footer chartData={chartData} />
          </div>
    </div>
  );
}

export default App;
