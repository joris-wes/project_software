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



const body = ({dropDownData}) => {
  
  
  useEffect(()=>{
    if(dropDownData.length != 0){
    let dropDownList = JSON.parse(dropDownData);
    const newArray =[]
    for(let i=0;i<dropDownList.length;i++){
       newArray.push(dropDownList[i]);
       
    }
    }
  })
 
  return (
    <div className='body'>
       <h1 id="one">You have selected the temperature graph for:</h1>
       <h1 id="one">{dropDownData}</h1>
        <div className='graphbody__container'>
            <Chart chartData/>
            <LineChart   
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Line connectNulls stype="monotone" dataKey="temperature_sensor2" stroke="#FF0000" />
            <Brush height={17} />
          </LineChart>        
        </div>
    </div>
  )
}
export default body;
