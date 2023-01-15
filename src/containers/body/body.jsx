import React from 'react';
import './body.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import Chart from './chart';
import { useEffect } from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

const body = ({dropDownData, xscope, yscope}) => {
  const [listOfSensors, setListOfSensors] = useState("");
  const [listofurls, setListofUrl] = useState([]);

  const ParsedYscopeOptions = {
    Humidity: "humidity", 
    Temperature_out: "temperature_out",
    Temperature: "temperature",
    Light: "light",  
    Pressure: "pressure",
    
  }


  useEffect(()=>{
    const array = JSON.parse(dropDownData);
    let v = "";
    let urlArray = []
    for (let i=0;i<array.length;i++) {
      v = v+array[i].value+", ";
      let url = `https://ba5b-83-82-70-70.eu.ngrok.io/${array[i].value}/data/${ParsedYscopeOptions[yscope]}`;
      urlArray.push(url)
      }
    console.log(urlArray[0]);
    setListofUrl(urlArray);
    setListOfSensors(v); 

  },[dropDownData, yscope, xscope, listOfSensors]);

  

  return (
    <div className='body'>
       <h1 id="one">You have selected the temperature graph for:</h1>
       <h1 id="one">{listOfSensors}</h1>
        <div className='graphbody__container'>
            <Chart listofurls={listofurls}/>
        </div>
    </div>
  )
}
export default body;
