/*
  * This file contains the main App component. This component is used to render the Header, Body and Footer components.
  * The App component is used to pass data between the components. The data is passed using states.
  * The states are used to pass data between the Header, Body and Footer components.
*/

import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, Body, Footer } from './containers';

const App = () => {

  const [dropDownData, setDropDownData] = useState('{}');
  const [xscope, setxScope] = useState('');
  const [yscope, setyScope] = useState('');
  // useEffect is used to log the data in the console. This is used for debugging purposes
  useEffect(()=>{
    console.log("y: " + yscope);
    console.log("x: " + xscope);
    console.log("Selected sensors: "+ JSON.stringify(dropDownData));
  }, [yscope, xscope, dropDownData])
  // The return statement is used to render the components within the site
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header setDropDownData={setDropDownData} />
      </div>
      <div className='main__body'>
        <Body dropDownData={dropDownData} xscope={xscope} yscope={yscope} />
        <Footer setxScope={setxScope} setyScope={setyScope} />
      </div>
    </div>
  );
}

export default App;
