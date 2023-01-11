import React from 'react';
import './body.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import Chart from './chart';
import { useEffect } from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

const data = [
  {
    time: '12:00',
    Enschede: 13,
    temperature_sensor2: 13,
    Wierden: 10,
    pressure_sensor1: 750,
    pGronau: 750,
    pWierden: 750,
  },
  {
    time: '13:20',
    Enschede: 14,
    Gronau: null,
    Wierden: null,
    
  },
  {
    time: '14:00',
    Enschede: 15,
    temperature_sensor2: 14,
    Wierden: 13,
    pressure_sensor1: 770,
    pGronau: 750,
    pWierden: 740,
  },
  {
    time: '16:00',
    Enschede: 13,
    temperature_sensor2: 14,
    Wierden: 12,
    pressure_sensor1: 780,
    pGronau: 760,
    pWierden: 750,
  },
  {
    time: '18:00',
    Enschede: 10,
    temperature_sensor2: 10,
    Wierden: 9,
    pressure_sensor1: 790,
    pGronau: 770,
    pWierden: 760,

  },
  {
    time: '20:00',
    Enschede: 8,
    temperature_sensor2: 7,
    Wierden: 7,
    pressure_sensor1: 800,
    pGronau: 780,
    pWierden: 770,

  },
  {
    time: '22:00',
    Enschede: 5,
    temperature_sensor2: 5,
    Wierden: 0,
    pressure_sensor1: 750,
    pGronau: 750,
    pWierden: 750,
  },
  {
    time: '00:00',
    Enschede: 0,
    temperature_sensor2: 0,
    Wierden: -1,
    pressure_sensor1: 750,
    pGronau: 750,
    pWierden: 750,
  },
]

const body = ({dropDownData, xscope, yscope}) => {
  const [listOfSensors, setListOfSensors] = useState("");
  const [listofurls, setListofUrl] = useState([]);
  const ParsedYscopeOptions ={
    humidity: "Hum_SHT",
    temperature: "Temp_SHT",
    illumination: "Ill_SHT"
  }
  
  useEffect(()=>{
    const array = JSON.parse(dropDownData);
    let v = "";
    let urlArray = []
    for (let i=0;i<array.length;i++){
      v = v+array[i].value+", ";
      let url = `https://ae8a-109-252-14-210.eu.ngrok.io/${array[i].value}/data/${ParsedYscopeOptions[yscope]}`;
      urlArray.push(url)
      }
    setListofUrl(urlArray);
    setListOfSensors(v); 
  });

  return (
    <div className='body'>
       <h1 id="one">You have selected the temperature graph for:</h1>
       <h1 id="one">{listOfSensors}</h1>
        <div className='graphbody__container'>
            <Chart urlArray/>
        </div>
    </div>
  )
}
export default body;
