import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';

import './App.css';

import {Header, Body, Footer} from './containers';
const App = () => {

  const [dropDownData, setDropDownData] = useState('{}');  
  const [xscope,setxScope] = useState('');
  const [yscope, setyScope] = useState('');

  useEffect(()=>{
    // axios.post("http://server", yscope, xscope)
    console.log("y: " + yscope);
    console.log("x: " + xscope);
    console.log("Selected sensors: "+ JSON.stringify(dropDownData));
  }, [yscope, xscope, dropDownData])
  


  return (
    <div className="App">
      <div className="gradient__bg">
        <Header setDropDownData={setDropDownData} />
      </div>
      <div className='main__body'>
        <Body dropDownData ={dropDownData} xscope={xscope} yscope={yscope}/>
        <Footer setxScope ={setxScope} setyScope = {setyScope}  />
          </div>
    </div>
  );
}

export default App;
